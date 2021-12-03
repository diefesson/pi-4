import {Request, Response} from "express";
import Players from '../models/Players';

class CreatePlayerController{
    async handle(request: Request, response:Response): Promise<Response>{
        return response.status(201).json({message: "deu bom"});
    }
}

export {CreatePlayerController};
