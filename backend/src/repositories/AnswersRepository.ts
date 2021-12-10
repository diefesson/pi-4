import { DeleteResult, getRepository, Repository } from "typeorm";
import { IAnswersDTO } from "../dtos/IAnswersDTO";
import { Answers } from "../entities/Answers";


class AnswersRepository {

    private repository : Repository<Answers>;

    constructor(){
        this.repository = getRepository(Answers)
    }

    async create({id, description, question_id, isCorrect,  created_at,updated_at, deleted_at }:IAnswersDTO):Promise<Answers>{
        
        const answer = this.repository.create({
            id,
            description,
            question_id,
            isCorrect,
            created_at,
            updated_at,
             deleted_at 
        });

        await this.repository.save(answer);

        return await this.findByDescriptionAndQuestionId(description, question_id);
    }

    async findByDescriptionAndQuestionId(description:string, question_id: number):Promise<Answers>{
        const aux = await this.repository.find({where: {description,question_id }});
        return aux[0];
    }

    async findByQuestionId(question_id: number): Promise<Answers[]>{
        return await this.repository.find({where: {question_id }});
    }

    async findByIdAndQuestionId(id:number):Promise<Answers>{
        return await this.repository.findOne( id);
    }

    async getAll():Promise<Answers[]>{
        return await this.repository.find();
    }

    async findById(id: number): Promise<Answers>{
        return await this.repository.findOne(id);
    }

    async delete(question_id: number): Promise<void>{
        await this.repository
            .createQueryBuilder()
            .update(Answers)
            .set({deleted_at : new Date})
            .where("question_id=:question_id", {question_id})
            .execute();
    }
}

export {AnswersRepository};