import { Router } from "express";
import { appointmentController } from "../controllers";
import cors from "cors";
export const appointmentRouter = Router();
appointmentRouter.get('/test', (req, res) => {
    res.send("hello Testing appointment")
})

appointmentRouter.post('/bookAppointment', appointmentController.bookAppointment);
appointmentRouter.get('/getAppointment/:email', appointmentController.getAppointment);