import { getRepository, Repository } from "typeorm";
import { IQuestionsDTO } from "../dtos/IQuestionsDTO";
import { Questions } from "../entities/Questions";


class QuestionsRepository{ 

    private repository: Repository<Questions>;

    constructor(){
        this.repository = getRepository(Questions);
    }

    async create({utterance, player_id,}:IQuestionsDTO): Promise<Questions>{
        const question = this.repository.create({
            utterance,
            player_id
        });

        await this.repository.save(question);

        const questionSave = await this.findByUtterance(utterance);

        return questionSave;
    }

    async findByUtterance(utterance : string):Promise<Questions>{
        const aux = await this.repository.find({where: {utterance}});
        return aux[0];
    }

    async findById(id: number):Promise<Questions>{
        return await this.repository.findOne(id);
    }

}

export {QuestionsRepository};