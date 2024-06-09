import { Router } from "express";
import { membersRoute } from "./members";

export const routes = Router();

routes.use("/members", membersRoute )

