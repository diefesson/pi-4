import { Request, Response } from "express";
import { container } from "tsyringe";
import {QuestionsUseCase} from "../useCase/QuestionsUseCase";


class QuestionsController{   

    async create(request: Request,response: Response):Promise<Response>{
        const {utterance, player_id, answers} = request.body;
       
        const questionsUseCase = container.resolve(QuestionsUseCase)
       
        const result = await questionsUseCase.create({utterance, player_id}, answers);

        return response.status(201).json(result);
    }

    async get(request: Request,response: Response):Promise<Response>{
        const {id} = request.params;
        
        const questionsUseCase = container.resolve(QuestionsUseCase)
        
        const result = await  questionsUseCase.get( parseInt(id));

        return response.status(200).json(result);
    }

    async getAll(request: Request,response: Response):Promise<Response>{
        const questionsUseCase = container.resolve(QuestionsUseCase)
        
        const result = await questionsUseCase.getAll();

        return response.status(200).json(result);
    }

    async answersIsCorrect(request: Request,response: Response):Promise<Response>{
        const {id,answers_id } = request.params;
        
        const questionsUseCase = container.resolve(QuestionsUseCase)
        
        const result = await questionsUseCase.answersIsCorrect(parseInt(id),parseInt(answers_id));

        return response.status(200).json(result);
    }

    async put(request: Request,response: Response):Promise<Response>{
        const {utterance, player_id, answers } = request.body;
        const {id} = request.params;
        
        const questionsUseCase = container.resolve(QuestionsUseCase)
        
        const result = await questionsUseCase.put({id: parseInt(id), utterance, player_id}, answers);

        return response.status(200).json(result);
    }

    async delete(request: Request,response: Response):Promise<Response>{
        const {id } = request.params;
        
        const questionsUseCase = container.resolve(QuestionsUseCase)
        
        await questionsUseCase.delete(parseInt(id));

        return response.status(200);
    }
}

export {QuestionsController};