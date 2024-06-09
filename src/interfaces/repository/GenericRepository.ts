import { IGenericDataSourceRepository } from "../../domain/db/interfaces/IGenericDataSourceRepository";
import { IGenericRepository } from "./IGenericRepository";


export class GenericRepository<T> implements IGenericRepository<T> {
    constructor(
       public readonly modelRepository: IGenericDataSourceRepository<T> & IGenericRepository<T>
    ){

    }

    async startTransaction(): Promise<void> {
        await this.modelRepository.startTransaction()
    }

    async commitTransaction(): Promise<void> {
        await this.modelRepository.commitTransaction(()=>{})
    }

    async findBy(id: string | number): Promise<T | null> {
        return this.modelRepository.findBy(id)
    }

    async find(limit: number, offset: number): Promise<T[]> {
        return await this.modelRepository.find(limit, offset)
    }

    async create(data: T): Promise<T> {
        return await this.modelRepository.create(data)
    }

    async update(id: number | string, data: Partial<T>): Promise<T | boolean | string | number> {
        return await this.modelRepository.update(id, data)
    }

    async delete(id: string | number): Promise<T | boolean | string | number> {
        return await this.modelRepository.delete(id)
    }

}