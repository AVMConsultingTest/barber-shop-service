import express, { NextFunction, Request, Response } from "express";
import { CreatePaymentRequest } from "square/dist/models/createPaymentRequest";
import { v4 as uuidv4 } from 'uuid';
const app = express();
const env = app.get('env');
import { paymentsApi, locationsApi } from '../util/square-client';

export const getSquare = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const locationResponse = await locationsApi.retrieveLocation("L1PB79N8HYT1Y");
        const currency = locationResponse?.result?.location?.currency;
        const country = locationResponse?.result?.location?.country;
        const idempotencyKey = uuidv4();
    
        // Set the app and location ids for Payment Web SDK to use
        res.setHeader('Content-Type', 'text/html');///responseType: 'text'
        res.setHeader('responseType', 'text/html');///Accept: 'text'
        res.setHeader('Accept', 'text/html');///Accept: 'text'
        res.render('index', {
        env,
        title: 'Make Payment',
        squareApplicationId: process.env.SQUARE_APPLICATION_ID,
        squareLocationId: process.env.SQUARE_LOCATION_ID,
        squareAccountCountry: country,
        squareAccountCurrency: currency,
        idempotencyKey
        });
    } catch (error) {
        next(error);
    }
  };

export const processPayment = async (req: Request, res: Response, next: NextFunction) =>  {
  const token = req.body.token;
  const idempotencyKey = req.body.idempotencyKey;

  const locationResponse = await locationsApi.retrieveLocation("L1PB79N8HYT1Y");
  const currency = locationResponse?.result?.location?.currency;
 
  // Charge the customer's card
  const requestBody: CreatePaymentRequest = {
    idempotencyKey,
    sourceId: token,
    amountMoney: {
      amount: BigInt("100"), // $1.00 charge
      currency
    }
  };

  try {
    const { result:  CreatePaymentResponse } = await paymentsApi.createPayment(requestBody);
    const result = JSON.stringify(CreatePaymentResponse.payment, (key, value) => {
      return typeof value === "bigint" ? parseInt(String(value)) : value;
    }, 4);
    res.status(200).json(result);
  } catch (error: any) {
    res.json(error.result);
  }
}