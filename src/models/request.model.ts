export type Request = {

    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    system_id: string,
    display_name: string,
    status: eStatus,
    notes: string,

}

export enum eStatus {
    sent, pending, approve, reject
} 
