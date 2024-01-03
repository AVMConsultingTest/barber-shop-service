import Joi from "joi";
import { appointmentService } from "../services";
import { IAppointmentCreate, IAppointmentUpdate } from "../models";


type IAppointmentParams = {
  appointment_id: number
}

type GetAppointmentParams = {
  email: string
}

type IBookAppointment = {
  appointment: IAppointmentCreate
}

export const appointmentValidator = {
  bookAppointment: {
    body: Joi.object<IBookAppointment>({
      appointment: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone_number: Joi.number().required(),
        service: Joi.string().required(),
        serviceDetails: Joi.string().required(),
        bookingDate: Joi.string().required(),
        bookingTime: Joi.string().required(),
        barberDetails: Joi.string().required(),
        // address_line1: Joi.string().required(),
        // address_line2: Joi.string().optional(),
        // state: Joi.string().required(),
        // city: Joi.string().required(),
        // zip_code: Joi.string().required(),
        // country: Joi.string().required(),
        // logo: Joi.string().required(),
        // account_number: Joi.string().required(),
        // routing_number: Joi.string().required(),
        // mc_number: Joi.string().required(),
        // dot_number: Joi.string().required(),
        // factoring_appointment:Joi.string(),
        // factoring_account_number:Joi.string(),
        // factoring_username:Joi.string(),
        // factoring_password:Joi.string(),
      })
    })
  },
  update: {
    params: Joi.object<IAppointmentParams>({
      appointment_id: Joi.number().required()
    }),
    body: Joi.object<IAppointmentUpdate>({
      name: Joi.string(),
      email: Joi.string().email(),
      phone_number: Joi.number(),
      service: Joi.string(),
      serviceDetails: Joi.string(),
      bookingDate: Joi.string(),
      bookingTime: Joi.string(),
      barberDetails: Joi.string(),
    //   address_line1: Joi.string(),
    //   address_line2: Joi.string(),
    //   state: Joi.string(),
    //   city: Joi.string(),
    //   zip_code: Joi.string(),
    //   country: Joi.string().required(),
    //   account_number: Joi.string(),
    //   routing_number: Joi.string(),
    //   ein_number: Joi.string(),
    //   mc_number: Joi.string(),
    //   dot_number: Joi.string(),


    //   factoring_account_number:Joi.string(),
    //   factoring_username:Joi.string(),
    //   factoring_password:Joi.string(),
    })
  },
  get: {
    params: Joi.object<GetAppointmentParams>({
      email: Joi.string().required()
    })
  },
  delete: {
    params: Joi.object<IAppointmentParams>({
      appointment_id: Joi.number().required()
    })
  },
  
};