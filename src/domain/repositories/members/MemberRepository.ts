import { GenericRepository } from "../../../interfaces/repository/GenericRepository";
import { IGenericDataSourceRepository } from "../../db/interfaces/IGenericDataSourceRepository";
import { IMember } from "../../interfaces/IMember";
import { IMemberRepository } from "./IMemberRepository";


export class MemberRepository extends GenericRepository<IMember> implements IMemberRepository{
    constructor(
        public readonly modelRepository: IGenericDataSourceRepository<IMember> & IMemberRepository
    ){
        super(modelRepository);
    }
    
    async saveMemberActivities(memberId: number, activities: number[]): Promise<boolean> {
        return await this.modelRepository.saveMemberActivities(memberId, activities)
    }

    findMemberActivities(id: number): Promise<IMember | null> {
        return this.modelRepository.findMemberActivities(id)
    }
    
}