// const Joi = require('joi');
import Joi from "joi";

export const appointmentSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    job: Joi.string()
        .min(3)
        .max(30)
        .required(),
})

// module.exports = schema;