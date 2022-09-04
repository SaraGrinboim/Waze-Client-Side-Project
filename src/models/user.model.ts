
export interface User {
    _id?: String,
    role: eRole,
    firstName: String,
    lastName: String,
    email: String,
    phone: String
}

export enum eRole {
    manager,
    customer,
    admin
}