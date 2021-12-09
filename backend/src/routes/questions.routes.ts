import {Router} from "express";
import {QuestionsController} from "../controller/QuestionsController";

var questionsRoutes = Router();

const questionsController = new QuestionsController();
questionsRoutes.post("/", questionsController.create);
questionsRoutes.get("/{id}", questionsController.get);
questionsRoutes.get("/{id}/answers/{answers_id}/isCorrect", questionsController.get);
// pegar questoes e respostas
// verificar se uma questão esta certa
// pegar todas as questoes de um usuário
// pegar todas as questoes e respostas (player deve ser Admin)

// atualizar questoes e perguntas
// deletar questões 

export {questionsRoutes}

