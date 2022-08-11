
export type User = {
    _id?:String,
    role:Erole,
    firstName:String,
    lastName:String,
    email:String,
    phone:String
}

export enum Erole{
    manager,
    customer,
    admin
}