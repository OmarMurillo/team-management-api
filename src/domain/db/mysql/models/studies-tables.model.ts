import { DataTypes, Model } from "sequelize";
import datasSourceConnection from '../../data-source.connection'
import { IStudyTable } from "../../../interfaces/IStudyTable";
import StudyTableColumnModel from "./studies-columns.model";

interface StudyTableInstance extends Model<IStudyTable, Omit<IStudyTable, "id">>, IStudyTable {}
const StudyTableModel = datasSourceConnection.define<StudyTableInstance>('studies_tables', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    table_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    study_id: {
        type: DataTypes.INTEGER
    },
}, { timestamps: false});

StudyTableModel.hasMany(StudyTableColumnModel, { foreignKey: "studies_table_id", as: "columns"})
StudyTableColumnModel.belongsTo(StudyTableModel, { foreignKey: "id", as: "table"})
  
export default StudyTableModel