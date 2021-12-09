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
        console.log(id);
        
        const questionsUseCase = container.resolve(QuestionsUseCase)
        
        const result = await  questionsUseCase.get( parseInt(id));

        return response.status(201).json(result);
    }
}

export {QuestionsController};