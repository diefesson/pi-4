import {Request, Response} from "express";
import {container} from "tsyringe";
import { PlayersUseCase } from "../useCase/PlayersUseCase";

class PlayerController{
    async create(request: Request, response:Response): Promise<Response>{
        
        const {
            name,
            nickname,
            password,
            avatar,
            isAdmin,
        } = request.body;

        const playersUseCase = container.resolve(PlayersUseCase);

        const result = await playersUseCase.create({
            name,
            nickname,
            password,
            avatar,
            isAdmin,
        });

        return response.status(201).send();
    }
}

export {PlayerController};
