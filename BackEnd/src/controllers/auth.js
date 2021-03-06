const User = require('../models/User.js');
const Hospital = require('../models/Hospital.js');
const bcrypt = require('bcryptjs');
const {registerValidationUser, registerValidationHospital} = require('../validation/registerValidation');
const {loginValidation} = require('../validation/loginValidation');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middlewares/check-auth');


//USER register route ---------------------------------------------
exports.register = (async (req,res) => {
    
    const {error} = registerValidationUser(req.body);

    //check if data provided is valid
    if(error)
      return res.status(400).send(error.details[0].message);


    //check if the same user attempt to register
    const existsEmail = await User.findOne({email: req.body.email});
    if(existsEmail)
     return res.status(400).send('User with this email already exists');

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    
    //creating a new user
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPass
    })

     try {
         const savedUser = await user.save();
         res.status(200).send(savedUser);
     } catch (error) {
         res.status(400).send(error);
}


});



//USER login route ------------------------------------------------------
exports.login = (async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    let loadedUser;
    User.findOne({ email: email })
      .then(user => {
        if (!user) {
          const error = new Error('A user with this email could not be found.');
          error.statusCode = 400;
          throw error;
        }
        loadedUser = user;
        return bcrypt.compare(password, user.password);
      })
      .then(isEqual => {
        if (!isEqual) {
          const error = new Error('Wrong password!');
          error.statusCode = 400;
          throw error;
        }
        res.status(200).json({ email: email, userId: loadedUser._id.toString() });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  });


//HOSPITAL register route ---------------------------------------------
exports.hospRegister = (async (req,res) => {
    
    const {error} = registerValidationHospital(req.body);

    //check if data provided is valid
    if(error)
      return res.status(400).send(error.details[0].message);


    //check if the same hospital attempt to register
    const existsEmail = await Hospital.findOne({email: req.body.email});
    if(existsEmail)
     return res.status(400).send('This email already exists.');

    //password hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    
    //creating a new hospital
    const hospital = new Hospital({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
    })

     try {
         const savedHospital = await hospital.save();
         res.status(200).send(savedHospital);
     } catch (error) {
         res.status(400).send(error);
}


});


//HOSPITAL login route ------------------------------------------------------
exports.hospLogin = (async (req,res) => {
    //check validation
    const {error} = loginValidation(req.body);
    
    //check if data provided is valid / if not raise error msg
    if(error)
        return res.status(400).send(error.details[0].message);
    
    
    const existsHospital = await Hospital.findOne({email: req.body.email});
    if(!existsHospital)
       return res.status(400).send('Email is not found!');

       
    const isPassValid = await bcrypt.compare(req.body.password, existsHospital.password);
    if(!isPassValid)
    return res.status(400).send('Password is incorrect!');
       
    // create and assign a token
    const token = jwt.sign({_id: existsHospital.id}, process.env.TOKEN_SECRET, {expiresIn: '1h'});

    res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: existsHospital._id
    });
  
});

exports.hospDonations = (checkAuth, async (req, res) => {
    const donations = '';
    res.status(200).json({
        donations: donations
    });
});

