import {Request, Response} from "express";
import PlayersRepository from '../models/Players';

class CreatePlayerController{
    async handle(request: Request, response:Response): Promise<Response>{
        const players = await PlayersRepository.findAll();
        return response.status(201).json(players);
    }
}

export {CreatePlayerController};
