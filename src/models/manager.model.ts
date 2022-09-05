import { eRole } from "./user.model"

export type Manager={

    user_id:string,
    system_id: string,
    active: boolean,
    display_name: string,
    role :eRole,
    invitation_sent:boolean

}
