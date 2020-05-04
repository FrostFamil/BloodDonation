const Joi = require('@hapi/joi');


//Create Request Validation ------------------------------
const createRequestValidation = (data) => {
    const schema = Joi.object({
        hosp_name: Joi.string()
            .alphanum()
            .min(2)
            .max(255)
            .required(),


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

        age: Joi.number()
            .integer()
            .min(0)
            .max(150),
    
        blood_type: Joi.string()
            .pattern(new RegExp('^(A|B|AB|O)[+-]$'))
            .max(3)
            .required()
         
    })

    return schema.validate(data);
}




module.exports.createRequestValidation = createRequestValidation;