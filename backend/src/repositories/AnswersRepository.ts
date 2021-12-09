import { getRepository, Repository } from "typeorm";
import { IAnswersDTO } from "../dtos/IAnswersDTO";
import { Answers } from "../entities/Answers";


class AnswersRepository {

    private repository : Repository<Answers>;

    constructor(){
        this.repository = getRepository(Answers)
    }

    async create({description, question_id, isCorrect}:IAnswersDTO):Promise<Answers>{
        
        const answer = this.repository.create({
            description,
            question_id,
            isCorrect
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

}

export {AnswersRepository};