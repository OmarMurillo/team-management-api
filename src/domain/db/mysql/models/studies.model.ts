import { DataTypes, Model } from "sequelize";
import datasSourceConnection from '../../data-source.connection'
import { IStudy } from "../../../interfaces/IStudy";
import StudyTableModel from "./studies-tables.model";

interface StudyInstance extends Model<IStudy, Omit<IStudy, "id">>, IStudy {}
const StudyModel = datasSourceConnection.define<StudyInstance>('studies', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    study_name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING
    },
}, { timestamps: false});

StudyModel.hasMany(StudyTableModel, { foreignKey: "study_id", as: "tables"})
StudyTableModel.belongsTo(StudyModel, { foreignKey: "id", as: "study"})
  
export default StudyModel