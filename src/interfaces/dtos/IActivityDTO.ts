import { IMemberDTO } from "./IMemberDTO"


export interface IActivityDTO {
    id?: number
    activity_name: string

    members?: Partial<IMemberDTO>[]
}