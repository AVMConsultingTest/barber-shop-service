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
exports.get = exports.create = void 0;
const fs_1 = __importDefault(require("fs"));
// export type WhereMany = Partial<Pick<IAppointment, "name" | "type">>
// export type WhereOne = Pick<IAppointment, "id">
// const appointmentAttributesExclude: Array<keyof IAppointment> = ["created_at", "updated_at"];
function create(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = fs_1.default.readFileSync("src/assets/appointmentJson.json");
        // Parse the JSON data into a JavaScript object
        const jsonData = JSON.parse(data.toString());
        jsonData.appointment.push(payload);
        const jsonString = JSON.stringify(jsonData);
        fs_1.default.writeFileSync("src/assets/appointmentJson.json", jsonString, 'utf-8');
        const update_data = fs_1.default.readFileSync("src/assets/appointmentJson.json");
        const updated_jsonData = JSON.parse(update_data.toString());
        // const result = JSON.parse(JSON.stringify(fs.createWriteStream(payload.name)));
        //   const result = await Appointment.create(payload);
        return "{Message : Sucecss}";
    });
}
exports.create = create;
function get(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = fs_1.default.readFileSync("src/assets/appointmentJson.json");
        // Parse the JSON data into a JavaScript object
        const jsonData = JSON.parse(data.toString());
        const dataReturn = (jsonData.appointment).filter((item) => {
            return item.email.toLowerCase() === params.toLowerCase();
        });
        return dataReturn;
    });
}
exports.get = get;
