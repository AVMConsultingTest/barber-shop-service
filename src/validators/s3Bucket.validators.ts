import Joi from "joi";



type GetS3BucketParams = {
  fileName: string
}

type IContactAppointment = {
  appointment: any;
}

export const s3BucketValidator = {
  contactAppointment: {
    body: Joi.object<IContactAppointment>({
      appointment: Joi.object({
        name: Joi.string(),
        email: Joi.string().email(),
      })
    })
  },
  get: {
    params: Joi.object<GetS3BucketParams>({
      fileName: Joi.string().required()
    })
  },

  
};