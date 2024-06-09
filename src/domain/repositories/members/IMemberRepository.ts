import { IGenericRepository } from "../../../interfaces/repository/IGenericRepository";
import { IMember } from "../../interfaces/IMember";


export interface IMemberRepository extends IGenericRepository<IMember>{
    
    findMemberActivities(id: number): Promise<IMember | null>

    saveMemberActivities(memberId: number, activities: number[]): Promise<boolean>
}