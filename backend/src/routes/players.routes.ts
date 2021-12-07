import { Router } from "express";
import { PlayerController } from "../controller/PlayersController";

var playersRoutes = Router();

const playerController = new PlayerController();

playersRoutes.post("/",playerController.create);

export {playersRoutes};