import { Router } from "express";
import { studysRoute } from "./studies";

export const routes = Router();

routes.use("/studies", studysRoute )

