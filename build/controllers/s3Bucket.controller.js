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
exports.updateS3Object = void 0;
const s3Bucket_service_1 = require("./../services/s3Bucket.service");
const s3Bucket_validators_1 = require("../validators/s3Bucket.validators");
const HttpError_1 = require("../utils/HttpError");
const updateS3Object = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const s3Client = new s3Bucket_service_1.S3ClientService(process.env.ACCESS_KEY_ID || "erf", process.env.SECRET_ACCESS_KEY || "erf");
    try {
        console.log("before params");
        const { error, value: params } = s3Bucket_validators_1.s3BucketValidator.get.params.validate(req.params);
        console.log(req.params);
        if (error)
            throw HttpError_1.HttpError.badRequest(error.message);
        console.log("if not errro in params");
        const s3GetObject = yield s3Client.getBucketData("userstoretechcafe", `${params.fileName}.json`);
        let objectJSONData = s3GetObject
            ? JSON.parse(s3GetObject)
            : JSON.parse('{"appointment": []}');
        objectJSONData.appointment.push(req.body);
        console.log("body :", req.body);
        yield s3Client.createPutPublicJsonRequest("userstoretechcafe", `${params.fileName}.json`, JSON.stringify(objectJSONData));
        res.status(200).json({ message: "Request Sent Successfully" });
    }
    catch (error) {
        res.json(error.result);
    }
});
exports.updateS3Object = updateS3Object;
// export const s3Response =  s3Client.put(s3PutRequest)
