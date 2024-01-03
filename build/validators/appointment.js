"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.appointmentValidator = {
    bookAppointment: {
        body: joi_1.default.object({
            appointment: joi_1.default.object({
                name: joi_1.default.string().required(),
                email: joi_1.default.string().email().required(),
                phone_number: joi_1.default.number().required(),
                service: joi_1.default.string().required(),
                serviceDetails: joi_1.default.string().required(),
                bookingDate: joi_1.default.string().required(),
                bookingTime: joi_1.default.string().required(),
                barberDetails: joi_1.default.string().required(),
                // address_line1: Joi.string().required(),
                // address_line2: Joi.string().optional(),
                // state: Joi.string().required(),
                // city: Joi.string().required(),
                // zip_code: Joi.string().required(),
                // country: Joi.string().required(),
                // logo: Joi.string().required(),
                // account_number: Joi.string().required(),
                // routing_number: Joi.string().required(),
                // mc_number: Joi.string().required(),
                // dot_number: Joi.string().required(),
                // factoring_appointment:Joi.string(),
                // factoring_account_number:Joi.string(),
                // factoring_username:Joi.string(),
                // factoring_password:Joi.string(),
            })
        })
    },
    update: {
        params: joi_1.default.object({
            appointment_id: joi_1.default.number().required()
        }),
        body: joi_1.default.object({
            name: joi_1.default.string(),
            email: joi_1.default.string().email(),
            phone_number: joi_1.default.number(),
            service: joi_1.default.string(),
            serviceDetails: joi_1.default.string(),
            bookingDate: joi_1.default.string(),
            bookingTime: joi_1.default.string(),
            barberDetails: joi_1.default.string(),
            //   address_line1: Joi.string(),
            //   address_line2: Joi.string(),
            //   state: Joi.string(),
            //   city: Joi.string(),
            //   zip_code: Joi.string(),
            //   country: Joi.string().required(),
            //   account_number: Joi.string(),
            //   routing_number: Joi.string(),
            //   ein_number: Joi.string(),
            //   mc_number: Joi.string(),
            //   dot_number: Joi.string(),
            //   factoring_account_number:Joi.string(),
            //   factoring_username:Joi.string(),
            //   factoring_password:Joi.string(),
        })
    },
    get: {
        params: joi_1.default.object({
            email: joi_1.default.string().required()
        })
    },
    delete: {
        params: joi_1.default.object({
            appointment_id: joi_1.default.number().required()
        })
    },
};
