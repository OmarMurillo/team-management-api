"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const members_1 = require("./members");
exports.routes = (0, express_1.Router)();
exports.routes.use("/members", members_1.membersRoute);
