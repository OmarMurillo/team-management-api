import { IMemberRepository } from "../../domain/repositories/members/IMemberRepository";

export class MemberActivityInteractor {
    constructor(
        private readonly memberRepo: IMemberRepository
    ){

    }
   
    public async saveMemberActivities(props: { memberId: number, activities: number[]}){
        await this.memberRepo.startTransaction()

        const { memberId, activities} = props

        const memberIdExists = await this.memberRepo.findBy(memberId)
        if( !memberIdExists ) 
            throw { message: "THE MEMBER DOESNT EXIST"}
        // IDENTIFY WHICH ARE DUPLICATED


        const saved = await this.memberRepo.saveMemberActivities(memberId, activities)

        await this.memberRepo.commitTransaction()
        return saved ? "The member's activities were saved" : "there was an error"
    }
}