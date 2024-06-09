import { IStudyTable } from "./IStudyTable"


export interface IStudy{
    id?: number
    study_name: string
    type: string

    tables?: IStudyTable[]
}