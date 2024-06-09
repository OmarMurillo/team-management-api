import { IStudy } from "../../../interfaces/IStudy";
import { IStudyRepository } from "../../../repositories/studies/IStudyRepository";
import { GenericMySQLDataSourceRepository } from "../GenericMySQLDataSourceRepository";
import StudyTableColumnModel from "../models/studies-columns.model";
import StudyTableRowModel from "../models/studies-rows.model";
import StudyTableModel from "../models/studies-tables.model";
import StudyModel from "../models/studies.model";


export class MySQLStudyRepository 
    extends GenericMySQLDataSourceRepository<IStudy> 
    implements IStudyRepository
{
    private StudyModel = StudyModel
    constructor(){
        super();
        
    }

    public async find(limit: number, offset: number): Promise<IStudy[]>  {
        return await this.StudyModel.findAll({
            limit,
            offset,
            transaction: this.transaction,
        } )
    }
    
    
    public async findBy(id: number): Promise<IStudy | null>  {
        return await this.StudyModel.findByPk(id, {
            include: [
                { 
                    model: StudyTableModel, as: "tables",
                    include: [{
                        model: StudyTableColumnModel, as: "columns",
                        include: [
                            { model: StudyTableRowModel, as: "rows"}
                        ]
                    }]
                }
            ],
            transaction: this.transaction
        })
    }  


    public async create(data: IStudy): Promise<IStudy> {
        return await this.StudyModel.create(data, { transaction: this.transaction, validate: true})    
    }

    public async update(id: string | number, data: Partial<IStudy>): Promise<IStudy | string | number | boolean> {
        const updatedRecord = await this.StudyModel.update(data, { where: { id},  transaction: this.transaction})
        return updatedRecord[0]
    }

    public async delete(id: string | number): Promise<string | number | boolean | IStudy> {
        const deletedRecord =  await this.StudyModel.destroy({ where: { id},  transaction: this.transaction})
        return deletedRecord
    }

}