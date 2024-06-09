// import { IMember } from "../../domain/interfaces/IMember";
// import { IMemberRepository } from "../../domain/repositories/members/IMemberRepository";
// import { MemberEntity } from "../../dtos/MemberDTO";
// import { IMemberDTO } from "../../interfaces/dtos/IMemberDTO";


// export class MemberInteractor {
//     constructor( private readonly memberRepo: IMemberRepository ){ }

//     public async save(data: IMemberDTO){
//         const memberEntity = new MemberEntity(data)

//         memberEntity.validate()

//         await this.memberRepo.startTransaction()

//         const memberInfo = memberEntity.toMember()
//         const activites = memberEntity.getFromDTOActivities()

//         const createdMember = await this.memberRepo.create(memberInfo as IMember)

//         if(createdMember.id && activites)
//             await this.memberRepo.saveMemberActivities(createdMember.id, activites)
        
//         await this.memberRepo.commitTransaction()
//         return {
//             "id": createdMember.id,
//             "message": "The member was saved"
//         }
//     }
// }