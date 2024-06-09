import { Transaction } from "sequelize";
import { IGenericDataSourceRepository } from "../interfaces/IGenericDataSourceRepository";


export interface IGenericMySQLDataSourceRepository<T> extends IGenericDataSourceRepository<T>{

}