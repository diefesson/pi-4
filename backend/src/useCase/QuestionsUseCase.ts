import { inject, injectable } from "tsyringe";
import { IAnswersDTO } from "../dtos/IAnswersDTO";
import { IQuestionsDTO } from "../dtos/IQuestionsDTO";
import { Questions } from "../entities/Questions";
import { AnswersRepository } from "../repositories/AnswersRepository";
import { PlayersRepository } from "../repositories/PlayersRepository";
import {QuestionsRepository} from "../repositories/QuestionsRepository";
import { AppError } from "../shared/errors/AppError";

interface IResponse{
    question:{
        id: number,
        utterance:string,
        createBy: string,
        answers: [
            {
                id: number,
                description: string,            
            }
        ]
    }    
}
@injectable()
class QuestionsUseCase{

    constructor(
        @inject("QuestionsRepository")
        private questionsRepository : QuestionsRepository,
        @inject("PlayersRepository")
        private playersRepository : PlayersRepository,
        @inject("AnswersRepository")
        private answersRepository : AnswersRepository,
    ){}

    async create({utterance, player_id}: IQuestionsDTO, answers: IAnswersDTO[]):Promise<IResponse>{

        if (answers.length != 4)
            console.log("Obrigatorio somente 4 respostas");

        const playerAlreadyExists = await this.playersRepository.getById(player_id);
        
        if(playerAlreadyExists == null)
            throw new AppError("Player is not exist!");

        const question = await this.questionsRepository.create({utterance, player_id});        
        
        var response = {            
            question: {
                id: question.id,
                utterance: question.utterance,
                createBy: playerAlreadyExists.nickname,
                answers : []
            },
            
        };        
                
        for(var answer of answers){
            answer.question_id = question.id;
            
            const aux = await this.answersRepository.create(answer);

            response.question.answers.push({
                id: aux.id,
                description: aux.description
            });
        }        

        return response as IResponse;
    }

    async get(id:number): Promise<IResponse>{
        const questionAlreadyExists = await this.questionsRepository.findById(id);

        if(questionAlreadyExists == null)
            throw new AppError("Questions is not exist!");

        const playerAlreadyExists = await this.playersRepository.getById(questionAlreadyExists.player_id);
        
        if(playerAlreadyExists == null)
            throw new AppError("Player is not exist!");
      
        const answersExists = await this.answersRepository.findByQuestionId(id);

        const answers = answersExists.map(answer => {
            return {
                id: answer.id,
                description: answer.description,    
            }
        });      
        
        return {
            question: {
                id: questionAlreadyExists.id,
                utterance: questionAlreadyExists.utterance,
                createBy: playerAlreadyExists.nickname,
                answers 
            }           
        } as IResponse;
    }

    async getAll(): Promise<Questions[]>{        
        var questions = await this.questionsRepository.getAll();

        for(let i =0 ;i< questions.length; i++){
            questions[i].answers = await this.answersRepository.findByQuestionId(questions[i].id);         
        }

        return questions ;
    }

    async answersIsCorrect(id:number, answers_id: number): Promise<boolean>{
        const questionAlreadyExists = await this.questionsRepository.findById(id);

        if(questionAlreadyExists == null)
            throw new AppError("Question is not exist!");

        const answer = await this.answersRepository.findByIdAndQuestionId( answers_id);

        return answer.isCorrect ;
    }

    async put(data:IQuestionsDTO, answers: IAnswersDTO[]): Promise<IResponse>{
        const questionAlreadyExists = await this.questionsRepository.findById(data.id);

        if(questionAlreadyExists == null)
            throw new AppError("Question is not exist!");

        data.updated_at = new Date;

        const question = await this.questionsRepository.create(data);        
    
        const playerAlreadyExists = await this.playersRepository.getById(questionAlreadyExists.player_id);
        
        if(playerAlreadyExists == null)
            throw new AppError("Player is not exist!");

        var response = {            
            question: {
                id: question.id,
                utterance: question.utterance,
                createBy: playerAlreadyExists.nickname,
                answers : []
            },
            
        };        
                
        for(var answer of answers){
            let answerAlreadyExists = await this.answersRepository.findById(answer.id);

            if(answerAlreadyExists == null)
                throw new AppError(`The Answer of id ${answer.id} and description '${answer.description}' not exists!`);
            
            answerAlreadyExists.updated_at = new Date;
                
            await this.answersRepository.create(answerAlreadyExists);

            response.question.answers.push({
                id: answer.id,
                description: answer.description
            });
        }        

        return response as IResponse;

    }

    async delete(id:number): Promise<void>{
        const questionAlreadyExists = await this.questionsRepository.findById(id);

        if(questionAlreadyExists == null)
            throw new AppError("Question is not exist!");
        
        this.questionsRepository.delete(id);
        this.answersRepository.delete(id);
        console.log("Apagou");
        return;
    }
}

export {QuestionsUseCase};