import {
  S3Client,
  PutObjectCommand,
  CreateBucketCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";

export class S3ClientService {
  protected s3Client: S3Client;

  constructor(accessKeyId: string, secretAccessKey: string) {
    this.s3Client = new S3Client({
      region: "us-east-1",
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });
  }

  public async createPutPublicJsonRequest(
    location: string,
    filename: string,
    contents: string
  ) {
    const resData = await this.s3Client.send(
      new PutObjectCommand({
        Bucket: location,
        Key: filename,
        Body: contents,
      })
    );
    return resData;
  }

  public async getBucketData(location: string, filename: string) {
    const command = new GetObjectCommand({
      Bucket: location,
      Key: filename,
    });

    try {
      const response = await this.s3Client.send(command);
      // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
      const str = await response?.Body?.transformToString();
      console.log(str);
      return str;
    } catch (err) {
      console.error(err);
    }
  }

  public async createBucket(bucketName: string) {
    await this.s3Client.send(
      new CreateBucketCommand({
        Bucket: bucketName,
      })
    );
    return bucketName;
  }
}
