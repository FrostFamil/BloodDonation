
const router = require('express').Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation')


//REGISTER route ---------------------------------------------
router.post('/register', async (req,res) => {
    
    const {error} = registerValidation(req.body);

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
         res.send(savedUser);
     } catch (error) {
         res.status(400).send(error);
}


});



//LOGIN route ------------------------------------------------------
router.post('/login', async (req,res) => {
    //check validation
    const {error} = loginValidation(req.body);
    
    //check if data provided is valid / if not raise error msg
    if(error)
        res.status(400).send(error.details[0].message);
    
    
    const existsUser = await User.findOne({email: req.body.email});
    if(!existsUser)
       return res.status(400).send('Email is not found!');
    
    const isPassValid = await bcrypt.compare(req.body.password, existsUser.password);
    if(!isPassValid)
       return res.status(400).send('Password is incorrect!');
    
    res.send('Logged in!');

    
});

module.exports = router;





