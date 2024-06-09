
import { IMember } from "../../../interfaces/IMember";
import { GenericMySQLDataSourceRepository } from "../GenericMySQLDataSourceRepository";
import MemberModel from "../models/members.model";
import MemberActivityModel from "../models/members-activites.model"
import ActivityModel from "../models/activities.model";
import { IMemberRepository } from "../../../repositories/members/IMemberRepository";



export class MemberMySQLRepository 
    extends GenericMySQLDataSourceRepository<IMember> 
    implements IMemberRepository
{
    private MemberModel = MemberModel
    constructor(){
        super();
        
    }
    async saveMemberActivities(memberId: number, activities: number[]): Promise<boolean> {
        for await (let activityId of activities) {
            await MemberActivityModel.create({
                member_id: memberId, 
                activity_id: activityId
            }, { transaction: this.transaction})
        }
        return true
    }

    public async find(limit: number, offset: number): Promise<IMember[]>  {
        return await this.MemberModel.findAll({
            limit,
            offset,
            transaction: this.transaction,
        } )
    }
    
    public async findMemberActivities(id: number){
        return await this.MemberModel.findByPk(id,
            {
                include: [
                    { model: ActivityModel, as: 'member_activity' }
                ],
                nest: true,
                logging: true,
                transaction: this.transaction
            }
        )
    }
    
    public async findBy(id: number): Promise<IMember | null>  {
        return await this.MemberModel.findByPk(id, {transaction: this.transaction,})
    }  


    public async create(data: IMember): Promise<IMember> {
        return await this.MemberModel.create(data, { transaction: this.transaction, validate: true})    
    }

    public async update(id: string | number, data: Partial<IMember>): Promise<IMember | string | number | boolean> {
        const updatedRecord = await this.MemberModel.update(data, { where: { id},  transaction: this.transaction})
        return updatedRecord[0]
    }

    public async delete(id: string | number): Promise<string | number | boolean | IMember> {
        const deletedRecord =  await this.MemberModel.destroy({ where: { id},  transaction: this.transaction})
        return deletedRecord
    }

}