

export interface IGenericRepository<T> {
    startTransaction(): Promise<void>
    commitTransaction(callback?: ()=> void ): Promise<void>

    find(limit: number, offset: number): Promise<T[]>
    findBy(id: number | string): Promise<T | null>
    create(data: T): Promise<T>
    update(id: number | string, data: Partial<T>): Promise<T | boolean | string | number>
    delete(id: number | string ): Promise<T | boolean | string | number>
}