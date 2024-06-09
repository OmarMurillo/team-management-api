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
Object.defineProperty(exports, "__esModule", { value: true });
exports.membersRoute = void 0;
const express_1 = require("express");
const MemberRepository_1 = require("../../domain/interfaces/members/MemberRepository");
const MemberMySQLRepository_1 = require("../../domain/db/mysql/repositories/MemberMySQLRepository");
exports.membersRoute = (0, express_1.Router)();
exports.membersRoute.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const memberRepo = new MemberRepository_1.MemberRepository(new MemberMySQLRepository_1.MemberMySQLRepository());
    res.send(yield memberRepo.find(100, 0));
}));
exports.membersRoute.get("/:memberId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const memberRepo = new MemberRepository_1.MemberRepository(new MemberMySQLRepository_1.MemberMySQLRepository());
    res.send(yield memberRepo.findBy(req.params.memberId));
}));
// membersRoute.put("/:memberId", updateMemberInfo)
