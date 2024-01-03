"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3BucketValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.s3BucketValidator = {
    contactAppointment: {
        body: joi_1.default.object({
            appointment: joi_1.default.object({
                name: joi_1.default.string(),
                email: joi_1.default.string().email(),
            })
        })
    },
    get: {
        params: joi_1.default.object({
            fileName: joi_1.default.string().required()
        })
    },
};
