import Joi from "joi";

const userSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'Name must be at least 2 characters long',
            'string.max': 'Name cannot be longer than 50 characters',
            'any.required': 'Name is required'
        }),
    lastname: Joi.string() 
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.min': 'Last name must be at least 2 characters long',
            'string.max': 'Last name cannot be longer than 50 characters',
            'any.required': 'Last name is required'
        }),
    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'any.required': 'Email is required'
        }),
    password: Joi.string()
        .min(5)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .required()
        .messages({
            'string.min': 'Password must be at least 5 characters long',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
            'any.required': 'Password is required'
        }),
    country: Joi.string()
        .default('Mexico')
        .messages({
            'any.required': 'Country is required'
        }),
    photo: Joi.string()
        .allow('')
        .uri()
        .messages({
            'string.uri': 'Invalid photo URL'
        })
});

export default userSchema;