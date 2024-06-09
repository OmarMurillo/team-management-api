import { IStudyRow } from "./IStudyRow"


export interface IStudyColumn{
    id?: number
    column_name: string
    studies_table_id: number

    rows?: IStudyRow[]
}