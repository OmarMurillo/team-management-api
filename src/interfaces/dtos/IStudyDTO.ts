
export interface IStudyDTO {
    Id?: number
    StudyName: string
    StudyType: string
    Tables: IStudyTableDTO[]
}

export interface IStudyTableDTO {
    Id?: number
    TableName: string
    Delete?: number
    Columns: IStudyColumnDTO[]
    Rows: IStudyRowDTO[]
}

export interface IStudyColumnDTO {
    Id?: number
    ColumnName: number
    Delete?: boolean
    ColumnChildren?: IStudyColumnDTO[]
}

export type IStudyRowDTO = { Id?: number } & Record<string, string | number | boolean | Date >