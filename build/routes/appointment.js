"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.appointmentRouter = (0, express_1.Router)();
exports.appointmentRouter.get('/test', (req, res) => {
    res.send("hello Testing appointment");
});
exports.appointmentRouter.post('/bookAppointment', controllers_1.appointmentController.bookAppointment);
exports.appointmentRouter.get('/getAppointment/:email', controllers_1.appointmentController.getAppointment);
