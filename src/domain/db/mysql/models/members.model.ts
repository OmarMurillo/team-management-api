import { DataTypes, Model } from "sequelize";
import { IMember } from "../../../interfaces/IMember";
import datasSourceConnection from '../../data-source.connection'
import ActivityModel from "./activities.model";
import MemberActivityModel from "./members-activites.model";
  
interface MemberInstance extends Model<IMember, Omit<IMember, "id">>, IMember {

}
  
const MemberModel = datasSourceConnection.define<MemberInstance>('members', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    date_of_creation: DataTypes.DATE,
    phone_number: DataTypes.STRING,
    age: {
        
        type: DataTypes.NUMBER
    },
    date_of_birth: DataTypes.DATE,
    email: DataTypes.STRING
}, { timestamps: false});
  

MemberModel.belongsToMany(ActivityModel, { 
    through: MemberActivityModel, foreignKey: "member_id", as: "member_activity"
})
ActivityModel.belongsToMany(MemberModel, { 
    through: MemberActivityModel, 
    foreignKey: "activity_id",
    as: "member_activity"
})
export default MemberModel