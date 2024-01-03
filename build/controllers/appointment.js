"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppointment = exports.bookAppointment = void 0;
const HttpError_1 = require("../utils/HttpError");
const appointment_1 = require("../validators/appointment");
const services_1 = require("../services");
const bookAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value: payload } = appointment_1.appointmentValidator.bookAppointment.body.validate(req.body);
        if (error)
            throw HttpError_1.HttpError.badRequest(error.message);
        //   res.status(201).json(req.body);
        const appointment = yield services_1.appointmentService.create(payload.appointment);
        res.status(201).json(appointment);
    }
    catch (error) {
        next(error);
    }
});
exports.bookAppointment = bookAppointment;
const getAppointment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error, value: params } = appointment_1.appointmentValidator.get.params.validate(req.params);
        if (error)
            throw HttpError_1.HttpError.badRequest(error.message);
        //   res.status(201).json(req.body);
        const appointment = yield services_1.appointmentService.get(params.email);
        res.status(200).json(appointment);
    }
    catch (error) {
        next(error);
    }
});
exports.getAppointment = getAppointment;
