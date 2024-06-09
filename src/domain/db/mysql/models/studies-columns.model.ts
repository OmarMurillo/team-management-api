import { DataTypes, Model } from "sequelize";
import datasSourceConnection from '../../data-source.connection'
import { IStudyColumn } from "../../../interfaces/IStudyColumn";
import StudyTableRowModel from "./studies-rows.model";

interface StudyTableColumnInstance extends Model<IStudyColumn, Omit<IStudyColumn, "id">>, IStudyColumn {}
const StudyTableColumnModel = datasSourceConnection.define<StudyTableColumnInstance>('studies_tables_columns', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    column_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    studies_table_id: {
        type: DataTypes.INTEGER
    },
}, { timestamps: false});

StudyTableColumnModel.hasMany(StudyTableRowModel, { foreignKey: "study_tables_column_id", as: "rows"})
StudyTableRowModel.belongsTo(StudyTableColumnModel, { foreignKey: "id", as: "column"})

export default StudyTableColumnModel