import {Transaction } from "sequelize";
import dataSourceSequelize from "../data-source.connection"
import { IGenericMySQLDataSourceRepository } from "./IGenericMySQLDataSourceRepository";

export class GenericMySQLDataSourceRepository<T> implements IGenericMySQLDataSourceRepository<T>{
    public transaction !: Transaction
    constructor(){
        
    }
    async startTransaction(): Promise<void> {
        this.transaction = await dataSourceSequelize.transaction()
    }

    async commitTransaction(): Promise<void> {
        try{
            await this.transaction.commit()
        }catch(error){
            await this.transaction.rollback()
            throw error
        }
    }

    find(limit: number, offset: number): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    findBy(id: string | number): Promise<T | null> {
        throw new Error("Method not implemented.");
    }
    create(data: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    update(id: number | string, data: Partial<T>): Promise<T | boolean | string | number> {
        throw new Error("Method not implemented.");
    }
    delete(id: string | number): Promise<T | boolean | string | number> {
        throw new Error("Method not implemented.");
    }

}