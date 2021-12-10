import { NextFunction, Request, Response } from "express";
import { PlayersRepository } from "../repositories/PlayersRepository";
import { PlayersError } from "../shared/errors/PlayersError";


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    //no momento essa função não pode usada, pq   ela depende 
    // autenticação das rotas
    const {id} = request.player;

    const playerRepository = new PlayersRepository();

    const player = await playerRepository.getById(id);

    if(!player.isAdmin)
        throw new PlayersError("Player is not admin!");

    return next();
}