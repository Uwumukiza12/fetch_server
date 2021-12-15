//VALIDATION 
const Joi = require('joi');

const registerValidation = (data)=>{
    const schema = {
        name: Joi.string().min(6).required(),
        email:Joi.string().min(8).required().email(),
        password: Joi.string().min(9).required()
    };
    return validate(data, schema);
};

const loginValidation = (data)=>{
    const schema = {
        email:Joi.string().min(8).required().email(),
        password: Joi.string().min(9).required()
    };
    return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

