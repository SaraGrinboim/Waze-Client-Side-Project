export type Request = {

    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    system_id: String,
    display_name: String,
    status: eStatus,
    notes: String,

}

export enum eStatus {
    sent, pending, approve, reject
} 
