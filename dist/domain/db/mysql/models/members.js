"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const data_source_connection_1 = __importDefault(require("../../data-source.connection"));
class MemberInstance extends sequelize_1.Model {
}
const MemberModel = data_source_connection_1.default.define('members', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: sequelize_1.DataTypes.STRING,
    date_of_creation: sequelize_1.DataTypes.DATE,
    phone_number: sequelize_1.DataTypes.STRING,
    age: sequelize_1.DataTypes.INTEGER,
    date_of_birth: sequelize_1.DataTypes.DATE,
    email: sequelize_1.DataTypes.STRING
}, { timestamps: false });
exports.default = MemberModel;
