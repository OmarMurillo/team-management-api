import { IActivity } from "./IActivity"

export interface IMember {
    id?: number
    name: string
    date_of_creation: Date | string,
    phone_number: string,
    age: number,
    date_of_birth: Date | string,
    email: string

    member_activity?: IActivity[]
}
