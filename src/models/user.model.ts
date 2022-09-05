
export interface User {
    _id?: any,
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