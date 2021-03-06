const Joi = require('@hapi/joi');


//REGISTER Validation for User
const registerValidationUser = (data) => {
    const schema = Joi.object({
        first_name: Joi.string()
            .alphanum()
            .min(2)
            .max(127)
            .required(),

        last_name: Joi.string()
            .alphanum()
            .min(2)
            .max(127)
            .required(),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','ru', 'hu', 'io', 'az', 'test'] } }),
    
    
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





//REGISTER Validation for Hospital
const registerValidationHospital = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(2)
            .max(255)
            .required(),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','ru', 'hu', 'io', 'az', 'test'] } }),
    
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(6)
            .required()       
    })
        .with('email', 'password')
    
    
    //.xor('password', 'access_token')
    //.with('password', 'repeat_password');

    return schema.validate(data);

}

module.exports.registerValidationUser = registerValidationUser;
module.exports.registerValidationHospital = registerValidationHospital;