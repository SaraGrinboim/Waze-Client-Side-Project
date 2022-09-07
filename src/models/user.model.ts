
export interface User {
    _id?: any,
    uid: string | undefined,
    role: eRole,
    firstName: string,
    lastName: string,
    email: string,
    phone: string
}

export enum eRole {
    manager,
    customer,
    admin
}