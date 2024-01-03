import { Router } from "express";
import { squarePaymentController } from "../controllers";


export const squarePaymentRouter = Router();

squarePaymentRouter.get('/getView', squarePaymentController.getSquare);
squarePaymentRouter.post('/process-payment', squarePaymentController.processPayment)