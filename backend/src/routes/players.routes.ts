import { Router } from "express";
import { CreatePlayerController } from "../controller/PlayersController";

var playersRoutes = Router();

const createPlayerController = new CreatePlayerController();

playersRoutes.post("/", createPlayerController.handle);

export {playersRoutes};