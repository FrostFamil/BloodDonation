const Joi = require('@hapi/joi');

//LOGIN Validation ------------------------------
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','ru', 'hu', 'io', 'az', 'test'] } }),
       
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .min(6)
            .required()
        
    })
        .with('email', 'password');

    return schema.validate(data);
}


module.exports.loginValidation = loginValidation;




