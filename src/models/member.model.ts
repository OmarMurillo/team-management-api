import { MemberDocument } from "../types/members.interface"
import {  Model, Schema, model } from 'mongoose'

const MemberSchema: Schema<MemberDocument> = new Schema({
    Name: { type: String, required: true},
    DateOfCreation:  { type: String, required: true},
    Phone:  { type: String, required: true},
    Age:  { type: Number, required: true},
    DateOfBirth:  { type: Date, required: false},
    Email:  { type: String, required: true, unique: true},
})

const MemberModel: Model<MemberDocument> =  model<MemberDocument>("members", MemberSchema)

// export default MemberModel;

export const getAllMembers = async (): Promise<MemberDocument[]> => {
    return await MemberModel.find<MemberDocument> ({ })
}

export const getMember = async( Id: string ): Promise<MemberDocument | null> => {
    return await MemberModel.findById<MemberDocument>(Id)
}

export const addNewMember = async( newMember: MemberDocument): Promise<MemberDocument> => {
    // let response: MemberDocument | string = ""
    return await MemberModel.create<MemberDocument>(newMember)
    // return response
}

export const updateMemberById = async( ID: string, updateMember: MemberDocument): Promise<MemberDocument | null> => {
    // let response: MemberDocument | string = ""
    return await MemberModel.findOneAndUpdate<MemberDocument>({ _id: ID }, updateMember, { new: true, upsert: true})
    // return response
}

export const deleteMemberById =  async( ID: string): Promise<String> => {
    let response: string = ""
    await MemberModel.findByIdAndDelete(ID)
        .then(() => { response = ID })
        
    return response
}
