import { Table, Column, Model } from "sequelize-typescript";

export interface IAppointment {
    id: number
    name: string
    email: string
    phone_number: number
    service: string;
    serviceDetails: string;
    bookingDate: Date;
    bookingTime: string;
    barberDetails: string;

    // address_line1?: string
    // address_line2?: string
    // state?: string
    // city?: string
    // zip_code?: string
    // country?: string
    // account_number?: string
    // routing_number?: string
    // ein_number?: string
    // mc_number?: string
    // dot_number?: string
    // factoring_account_number?: string
    // factoring_username?: string
    // factoring_password?: string

    // logo?: string

    // created_at?: Date
    // updated_at?: Date
}

export type IAppointmentCreate = Omit<IAppointment, "id">
export type IAppointmentUpdate = Partial<IAppointmentCreate>

@Table({ timestamps: true, underscored: true, tableName: "Companies", createdAt: "created_at", updatedAt: "updated_at" })
export class Appointment extends Model<IAppointment, IAppointmentCreate> {
    @Column({ allowNull: false, unique: true }) name: string | undefined;
    @Column({ allowNull: false, unique: true }) email: string | undefined;
    @Column({ allowNull: false, unique: true }) phone_number: number | undefined;
    @Column({ allowNull: false, unique: true }) service: string | undefined;
    @Column({ allowNull: false, unique: true }) serviceDetails: string | undefined;
    @Column({ allowNull: false, unique: true }) bookingDate: string | undefined;
    @Column({ allowNull: false, unique: true }) bookingTime: string | undefined;
    @Column({ allowNull: false, unique: true }) barberDetails: string | undefined;
    // @Column phone_number: string | undefined;
    // @Column address_line1: string | null;
    // @Column address_line2: string | null;
    // @Column state: string | null;
    // @Column city: string | null;
    // @Column zip_code: string | null;
    // @Column country: string | null;
    // @Column account_number: string | null;
    // @Column routing_number: string | null;
    // @Column ein_number: string | null;
    // @Column mc_number: string | null;
    // @Column dot_number: string | null;
    // @Column logo: string | null;
    // @Column factoring_account_number: string;
    // @Column factoring_username: string;
    // @Column factoring_password: string;
}