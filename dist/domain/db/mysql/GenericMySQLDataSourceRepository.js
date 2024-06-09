"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericMySQLDataSourceRepository = void 0;
const data_source_connection_1 = __importDefault(require("../data-source.connection"));
class GenericMySQLDataSourceRepository {
    constructor() {
    }
    commitTransaction(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.transaction = yield data_source_connection_1.default.transaction();
                callback(this.transaction);
                yield this.transaction.commit();
            }
            catch (error) {
                yield this.transaction.rollback();
                throw error;
            }
        });
    }
    find(limit, offset) {
        throw new Error("Method not implemented.");
    }
    findBy(id) {
        throw new Error("Method not implemented.");
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    update(data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.GenericMySQLDataSourceRepository = GenericMySQLDataSourceRepository;
