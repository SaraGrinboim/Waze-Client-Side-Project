export type user = {
    _id:String,
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