

export interface Appointment {
    id: number
    name: string
    email: string
    phone_number?: number
    address_line1?: string
    address_line2?: string
    state?: string
    city?: string
    zip_code?: string
    country?: string
    account_number?: string
    routing_number?: string
    ein_number?: string
    mc_number?: string
    dot_number?: string
    factoring_account_number?: string
    factoring_username?: string
    factoring_password?: string
    logo?: string
}

export type AppointmentForBookAppointment = Pick<
    Appointment, 
    "name" |  "email" | "phone_number" | "address_line1" | "address_line2" |
    "city" | "state" | "zip_code" | "country" | "logo" | "account_number" | 
    "routing_number" | "mc_number" | "dot_number" |
    "factoring_account_number" | "factoring_password" | "factoring_username"
  >


export type BookAppointment = {
  appointment: AppointmentForBookAppointment
}