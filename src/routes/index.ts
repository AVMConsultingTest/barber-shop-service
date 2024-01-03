import { Router } from "express";
import { appointmentRouter } from "./appointment";
import { squarePaymentRouter } from "./squarePayment";
import { s3BucketRouter } from "./s3Bucket";


export const root = Router();


root.use("/appointment", appointmentRouter);
root.use('/payment', squarePaymentRouter);
root.use('/s3Bucket', s3BucketRouter)