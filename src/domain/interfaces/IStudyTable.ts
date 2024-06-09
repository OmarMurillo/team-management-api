import { IStudyColumn } from "./IStudyColumn"



export interface IStudyTable{
    id?: number
    table_name: string
    study_id: number

    columns?: IStudyColumn[]
}