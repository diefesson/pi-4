import {  getRepository, Repository } from "typeorm";
import { IPlayersDTO } from "../dtos/IPlayersDTO";
import { Players } from "../entities/Players";


class PlayersRepository {

    private repository: Repository<Players>;

    constructor(){
        this.repository = getRepository(Players);
    }

    async create({
        name,
        nickname,
        password,
        avatar,
        isAdmin,
    }: IPlayersDTO):Promise<Players>{
        const auxIsAdmin = isAdmin ? true : false;
        
        const player = this.repository.create({
            name,
            nickname,
            password,
            avatar,
            isAdmin : auxIsAdmin
        });

        await this.repository.save(player);
        
        return player;
    }
}


export {PlayersRepository};