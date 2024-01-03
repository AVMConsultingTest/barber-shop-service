"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3BucketRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
exports.s3BucketRouter = (0, express_1.Router)();
exports.s3BucketRouter.get('/test', (req, res) => {
    res.send("hello Testing S3Client");
});
exports.s3BucketRouter.put('/updateS3Object/:fileName', controllers_1.s3BucketController.updateS3Object);
