import { NextFunction, Request, Response } from "express";
import { S3ClientService } from "./../services/s3Bucket.service";
import { s3BucketValidator } from "../validators/s3Bucket.validators";
import { HttpError } from "../utils/HttpError";

export const updateS3Object = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const s3Client = new S3ClientService(
        process.env.ACCESS_KEY_ID || "erf",
        process.env.SECRET_ACCESS_KEY || "erf"
    );

    try {
        console.log("before params");
        const { error, value: params } = s3BucketValidator.get.params.validate(
            req.params
        );
        console.log(req.params);
        if (error) throw HttpError.badRequest(error.message);
        console.log("if not errro in params");
        const s3GetObject = await s3Client.getBucketData(
            "userstoretechcafe",
            `${params.fileName}.json`
        );
        let objectJSONData = s3GetObject
            ? JSON.parse(s3GetObject)
            : JSON.parse('{"appointment": []}');
        objectJSONData.appointment.push(req.body);
        console.log("body :", req.body);
        await s3Client.createPutPublicJsonRequest(
            "userstoretechcafe",
            `${params.fileName}.json`,
            JSON.stringify(objectJSONData)
        );
        res.status(200).json({ message: "Request Sent Successfully" });
    } catch (error: any) {
        res.json(error.result);
    }
};

// export const s3Response =  s3Client.put(s3PutRequest)
