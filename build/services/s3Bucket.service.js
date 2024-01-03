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
exports.S3ClientService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
class S3ClientService {
    constructor(accessKeyId, secretAccessKey) {
        this.s3Client = new client_s3_1.S3Client({
            region: "us-east-1",
            credentials: {
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey,
            },
        });
    }
    createPutPublicJsonRequest(location, filename, contents) {
        return __awaiter(this, void 0, void 0, function* () {
            const resData = yield this.s3Client.send(new client_s3_1.PutObjectCommand({
                Bucket: location,
                Key: filename,
                Body: contents,
            }));
            return resData;
        });
    }
    getBucketData(location, filename) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const command = new client_s3_1.GetObjectCommand({
                Bucket: location,
                Key: filename,
            });
            try {
                const response = yield this.s3Client.send(command);
                // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
                const str = yield ((_a = response === null || response === void 0 ? void 0 : response.Body) === null || _a === void 0 ? void 0 : _a.transformToString());
                console.log(str);
                return str;
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    createBucket(bucketName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.s3Client.send(new client_s3_1.CreateBucketCommand({
                Bucket: bucketName,
            }));
            return bucketName;
        });
    }
}
exports.S3ClientService = S3ClientService;
