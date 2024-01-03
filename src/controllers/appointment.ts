import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/HttpError";
import { appointmentValidator } from "../validators/appointment";
import { appointmentService } from "../services";
export const bookAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      
      const { error, value: payload } = appointmentValidator.bookAppointment.body.validate(req.body);
      if (error) throw HttpError.badRequest(error.message);
   
     
    //   res.status(201).json(req.body);
      const appointment = await appointmentService.create(payload.appointment);
      
      res.status(201).json(appointment);
    } catch (error) {
      next(error);
    }
};

export const getAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
   
    const { error, value: params } = appointmentValidator.get.params.validate(req.params);
    if (error) throw HttpError.badRequest(error.message);
  
    
  //   res.status(201).json(req.body);
    const appointment = await appointmentService.get(params.email);
     
      res.status(200).json(appointment);
  } catch (error) {
    next(error);
  }
};