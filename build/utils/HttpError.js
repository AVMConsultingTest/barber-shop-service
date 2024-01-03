"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
    static isHttpError(error) {
        return error instanceof HttpError;
    }
    static badRequest(message) {
        return new HttpError(400, message);
    }
    static unauthorized(message) {
        return new HttpError(401, message || "Unauthorized");
    }
    static forbidden(message) {
        return new HttpError(403, message || "Forbidden");
    }
    static notFound(name) {
        return new HttpError(404, `${name} not found`);
    }
}
exports.HttpError = HttpError;
