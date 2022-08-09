import { User } from "./user.model"

export type System = {
    topic:string,
    objectName:string,
    owner:User,
    description:string,
    communicationDetails: Etypecommunication
}

export enum Etypecommunication{
    phone,
    Email
}