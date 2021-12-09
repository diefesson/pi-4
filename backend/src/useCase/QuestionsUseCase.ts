import { inject, injectable } from "tsyringe";
import { IAnswersDTO } from "../dtos/IAnswersDTO";
import { IQuestionsDTO } from "../dtos/IQuestionsDTO";
import { AnswersRepository } from "../repositories/AnswersRepository";
import { PlayersRepository } from "../repositories/PlayersRepository";
import {QuestionsRepository} from "../repositories/QuestionsRepository";

interface IResponse{
    question:{
        id: number,
        utterance:string,
        createBy: string
    },
    answers: [
        {
            id: number,
            description: string,            
        }
    ]
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
            console.log("player não existe");

        const question = await this.questionsRepository.create({utterance, player_id});        
        
        var response = {
            question: {},
            answers : []
        };        
                
        for(var answer of answers){
            answer.question_id = question.id;
            
            const aux = await this.answersRepository.create(answer);

            response.answers.push({
                id: aux.id,
                description: aux.description
            });
        }

        response.question = {
            id: question.id,
            utterance: question.utterance,
            createBy: playerAlreadyExists.nickname
        };

        return response as IResponse;
    }

    async get(id:number): Promise<IResponse>{
        const questionAlreadyExists = await this.questionsRepository.findById(id);

        if(questionAlreadyExists == null)
            console.log("Questão não existe!");

        // const playerAlreadyExists = await this.playersRepository.getById(questionAlreadyExists.player_id);
        
        // if(playerAlreadyExists == null)
        //     console.log("player não existe");
      
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
                createBy: questionAlreadyExists.player.nickname
            },
            answers 
        } as IResponse;
    }
}

export {QuestionsUseCase};