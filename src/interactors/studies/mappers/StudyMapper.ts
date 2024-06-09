import { IStudy } from "../../../domain/interfaces/IStudy";
import { IStudyDTO } from "../../../interfaces/dtos/IStudyDTO";

export const IStudyToIStudyDTO = (study: IStudy): IStudyDTO => {
    return {
        Id: study.id,
        StudyName: study.study_name,
        StudyType: study.type,
        Tables: []
    }
}