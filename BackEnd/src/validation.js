
const Joi = require('@hapi/joi');


//REGISTER Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        first_name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        last_name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(6)
            .required()
    
        
        //repeat_password: Joi.ref('password'),
    
        //access_token: [
        //    Joi.string(),
        //    Joi.number()
        //],
    
        //birth_year: Joi.number()
        //    .integer()
         //   .min(1900)
         //   .max(2013),
    
        
    })
        .with('email', 'password')
    
    
    //.xor('password', 'access_token')
    //.with('password', 'repeat_password');

    return schema.validate(data);

}

//LOGIN Validation ------------------------------
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
       
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(6)
            .required()
        
    })
        .with('email', 'password');

    return schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;



