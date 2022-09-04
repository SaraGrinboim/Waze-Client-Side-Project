import { eRole } from "./user.model"

export type Manager={

    user_id:String,
    system_id: String,
    active: String,
    display_name: String,
    role :eRole,
    invitation_sent:boolean
    
}
