
const router = require('express').Router();
const User = require('../models/User.js');
const {registerValidation}= require('../validation')


router.post('/register', async (req,res) => {
    
    const {error} = registerValidation(req.body);

    //check if data provided is valid
    if(error)
      res.status(400).send(error.details[0].message);


    //check if the same user attempt to register
    const IsEmailExist = await User.findOne({email: req.body.email});
    if(IsEmailExist)
     return res.status(400).send('User with this email already exists');
    
    //creating a new user
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
}


});


//router.post('/login', (req,res) => {
//    res.send('Register');
//});

module.exports = router;





