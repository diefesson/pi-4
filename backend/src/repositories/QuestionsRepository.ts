import { getRepository, Repository } from "typeorm";
import { IQuestionsDTO } from "../dtos/IQuestionsDTO";
import { Answers } from "../entities/Answers";
import { Questions } from "../entities/Questions";


class QuestionsRepository{ 

    private repository: Repository<Questions>;

    constructor(){
        this.repository = getRepository(Questions);
    }

    async create({id, utterance, player_id, created_at, updated_at, deleted_at}:IQuestionsDTO): Promise<Questions>{
        const question = this.repository.create({
            id,
            utterance,
            player_id,
            created_at,
            updated_at,
            deleted_at            
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

    async getAll():Promise<Questions[]>{
        return await this.repository.find();
            // .createQueryBuilder('questions')
            // .select()
            // .innerJoin('answers', 'answers.question_id = questions.id')            
            // .getRawMany(); 

            //.innerJoinAndSelect('answers.question_id', 'questions.id')
    }

    async delete(id: number):Promise<void>{

        await this.repository
            .createQueryBuilder()
            .update(Questions)
            .set({deleted_at : new Date})
            .where("id=:id", {id})
            .execute();
    }

}

export {QuestionsRepository};