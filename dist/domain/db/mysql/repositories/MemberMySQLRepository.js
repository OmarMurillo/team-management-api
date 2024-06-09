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
exports.MemberMySQLRepository = void 0;
const GenericMySQLDataSourceRepository_1 = require("../GenericMySQLDataSourceRepository");
const members_1 = __importDefault(require("../models/members"));
class MemberMySQLRepository extends GenericMySQLDataSourceRepository_1.GenericMySQLDataSourceRepository {
    constructor() {
        super();
        this.MemberModel = members_1.default;
    }
    find(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MemberModel.findAll({
                limit,
                offset
            });
        });
    }
    findBy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MemberModel.findByPk(id);
        });
    }
}
exports.MemberMySQLRepository = MemberMySQLRepository;
