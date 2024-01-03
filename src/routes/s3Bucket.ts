import { Router } from "express";
import { s3BucketController } from "./../controllers";
import cors from "cors";
export const s3BucketRouter = Router();
s3BucketRouter.get('/test', (req, res) => {
    res.send("hello Testing S3Client")
})

s3BucketRouter.put('/updateS3Object/:fileName', s3BucketController.updateS3Object);