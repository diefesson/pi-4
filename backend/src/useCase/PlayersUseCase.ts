import { inject, injectable } from "tsyringe";
import { IPlayersDTO } from "../dtos/IPlayersDTO";
import { Players } from "../entities/Players";
import { PlayersRepository } from "../repositories/PlayersRepository";

@injectable()
class PlayersUseCase{

    constructor(
        @inject("PlayersRepository")
        private playersRepository: PlayersRepository
    ){}

    async create(data: IPlayersDTO): Promise<Players>{
        return this.playersRepository.create(data);
    }
}

export {PlayersUseCase};