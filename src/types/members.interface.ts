import { Document } from "mongoose"

export interface MemberDocument extends Document {
    _id: string,
    Name: string,
    DateOfCreation: Date | string,
    Phone: string,
    Age: number,
    DateOfBirth: Date | string,
    Email: string,
}