import { IAppointment, IAppointmentCreate, IAppointmentUpdate, Appointment } from "../models";
import fs from "fs";
// export type WhereMany = Partial<Pick<IAppointment, "name" | "type">>
// export type WhereOne = Pick<IAppointment, "id">

// const appointmentAttributesExclude: Array<keyof IAppointment> = ["created_at", "updated_at"];



export async function create(payload: IAppointmentCreate) {
   
    const data = fs.readFileSync("src/assets/appointmentJson.json");
    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(data.toString());
    jsonData.appointment.push(payload);

    const jsonString = JSON.stringify(jsonData);

    fs.writeFileSync("src/assets/appointmentJson.json", jsonString, 'utf-8')


      const update_data = fs.readFileSync("src/assets/appointmentJson.json");
      const updated_jsonData = JSON.parse(update_data.toString());
// const result = JSON.parse(JSON.stringify(fs.createWriteStream(payload.name)));
//   const result = await Appointment.create(payload);
  return "{Message : Sucecss}";
}

export async function get(params: string) {
  const data = fs.readFileSync("src/assets/appointmentJson.json");
  // Parse the JSON data into a JavaScript object
  const jsonData = JSON.parse(data.toString());
  const dataReturn =  (jsonData.appointment).filter((item:IAppointment) => {
    return item.email.toLowerCase() === params.toLowerCase();
  });
  return dataReturn;
}