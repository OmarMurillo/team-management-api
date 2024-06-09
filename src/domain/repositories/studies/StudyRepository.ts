import { GenericRepository } from "../../../interfaces/repository/GenericRepository";
import { IStudy } from "../../interfaces/IStudy";
import { IStudyRepository } from "./IStudyRepository";


export class StudyRepository extends GenericRepository<IStudy> implements IStudyRepository{
    
    
}