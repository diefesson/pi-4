import { Router } from "express";
import { playersRoutes } from "./players.routes";
import { questionsRoutes } from "./questions.routes";

const router = Router();

router.use("/players", playersRoutes);
router.use("/questions", questionsRoutes);

export {router};