import { IActivityDTO } from "./IActivityDTO"

export interface IMemberDTO {
    id?: number
    name: string
    dateOfCreation: Date | string,
    phoneNumber: string,
    age: number,
    dateOfBirth: Date | string,
    email: string

    activities?: Partial<IActivityDTO>[]
}