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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPayment = exports.getSquare = void 0;
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const app = (0, express_1.default)();
const env = app.get('env');
const square_client_1 = require("../util/square-client");
const getSquare = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const locationResponse = yield square_client_1.locationsApi.retrieveLocation("L1PB79N8HYT1Y");
        const currency = (_b = (_a = locationResponse === null || locationResponse === void 0 ? void 0 : locationResponse.result) === null || _a === void 0 ? void 0 : _a.location) === null || _b === void 0 ? void 0 : _b.currency;
        const country = (_d = (_c = locationResponse === null || locationResponse === void 0 ? void 0 : locationResponse.result) === null || _c === void 0 ? void 0 : _c.location) === null || _d === void 0 ? void 0 : _d.country;
        const idempotencyKey = (0, uuid_1.v4)();
        // Set the app and location ids for Payment Web SDK to use
        res.setHeader('Content-Type', 'text/html'); ///responseType: 'text'
        res.setHeader('responseType', 'text/html'); ///Accept: 'text'
        res.setHeader('Accept', 'text/html'); ///Accept: 'text'
        res.render('index', {
            env,
            title: 'Make Payment',
            squareApplicationId: process.env.SQUARE_APPLICATION_ID,
            squareLocationId: process.env.SQUARE_LOCATION_ID,
            squareAccountCountry: country,
            squareAccountCurrency: currency,
            idempotencyKey
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSquare = getSquare;
const processPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const token = req.body.token;
    const idempotencyKey = req.body.idempotencyKey;
    const locationResponse = yield square_client_1.locationsApi.retrieveLocation("L1PB79N8HYT1Y");
    const currency = (_f = (_e = locationResponse === null || locationResponse === void 0 ? void 0 : locationResponse.result) === null || _e === void 0 ? void 0 : _e.location) === null || _f === void 0 ? void 0 : _f.currency;
    // Charge the customer's card
    const requestBody = {
        idempotencyKey,
        sourceId: token,
        amountMoney: {
            amount: BigInt("100"),
            currency
        }
    };
    try {
        const { result: CreatePaymentResponse } = yield square_client_1.paymentsApi.createPayment(requestBody);
        const result = JSON.stringify(CreatePaymentResponse.payment, (key, value) => {
            return typeof value === "bigint" ? parseInt(String(value)) : value;
        }, 4);
        res.status(200).json(result);
    }
    catch (error) {
        res.json(error.result);
    }
});
exports.processPayment = processPayment;
