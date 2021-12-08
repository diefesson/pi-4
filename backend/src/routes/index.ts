import { Router } from "express";
import { playersRoutes } from "./players.routes";

const router = Router();

router.use("/players", playersRoutes);

export {router};