
import { addNewMember, updateMemberById, getAllMembers, getMember, deleteMemberById } from "../../models/member.model"
import { MemberDocument } from "../../types/members.interface"

export const resolvers =  {
    Query: {
        hello: () => 'Hello world',
        members: async (): Promise<MemberDocument[]> => {
            return await getAllMembers()
        },
        getMember: async (_: any, { Id }: any): Promise<MemberDocument | null > => {
            return await getMember(Id)
        }
    },
    Mutation: {
        createMember: async (_: any, { newMember }: any): Promise<MemberDocument> => {
            return await  addNewMember(newMember as MemberDocument)
        },
        updateMember: async (_: any, { ID, updateMember }: any): Promise<MemberDocument | null> => {
            return  await updateMemberById(ID as string, updateMember as MemberDocument)
        },
        deleteMember: async (_: any, { ID }: any): Promise<String> => {
            return  await deleteMemberById(ID as string)
        },
    }
}
