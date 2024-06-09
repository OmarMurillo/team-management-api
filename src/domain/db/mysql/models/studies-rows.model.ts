import { DataTypes, Model } from "sequelize";
import datasSourceConnection from '../../data-source.connection'
import { IStudyRow } from "../../../interfaces/IStudyRow";

interface StudyTableRowInstance extends Model<IStudyRow, Omit<IStudyRow, "id">>, IStudyRow {}
const StudyTableRowModel = datasSourceConnection.define<StudyTableRowInstance>('studies_tables_column_rows', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    row_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    row_position: {
        type: DataTypes.INTEGER
    },
    study_tables_column_id: {
        type: DataTypes.INTEGER
    },
}, { timestamps: false});

export default StudyTableRowModel