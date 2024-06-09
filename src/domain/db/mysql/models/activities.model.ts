import { DataTypes, Model } from "sequelize";
import datasSourceConnection from '../../data-source.connection'
import { IActivity } from "../../../interfaces/IActivity";
import MemberModel from "./members.model";
import MemberActivityModel from "./members-activites.model";
  
interface ActivityInstance extends Model<IActivity, Omit<IActivity, "id">>, IActivity {}
const ActivityModel = datasSourceConnection.define<ActivityInstance>('activities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
}, { timestamps: false});
  
export default ActivityModel