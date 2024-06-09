import { DataTypes, Model } from "sequelize";
import datasSourceConnection from '../../data-source.connection'
import { IMemberActivity } from "../../../interfaces/IMemberActivity";
  
interface MemberActivityInstance extends Model<IMemberActivity, Omit<IMemberActivity, "id">>, IMemberActivity {}

const MemberActivityModel = datasSourceConnection.define<MemberActivityInstance>('members_activities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    member_id: {
        type: DataTypes.INTEGER
    },
    activity_id: {
        type: DataTypes.INTEGER
    },
}, { timestamps: false});
  
export default MemberActivityModel