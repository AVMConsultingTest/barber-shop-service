"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squarePaymentRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
exports.squarePaymentRouter = (0, express_1.Router)();
exports.squarePaymentRouter.get('/getView', controllers_1.squarePaymentController.getSquare);
exports.squarePaymentRouter.post('/process-payment', controllers_1.squarePaymentController.processPayment);
