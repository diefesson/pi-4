import {Router} from "express";
import {QuestionsController} from "../controller/QuestionsController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

var questionsRoutes = Router();

const questionsController = new QuestionsController();

questionsRoutes.post("/", questionsController.create);

questionsRoutes.get("/",
    //ensureAdmin,
    questionsController.getAll); 

questionsRoutes.get("/:id", questionsController.get);

questionsRoutes.get("/:id/answers/:answers_id/isCorrect", questionsController.answersIsCorrect);

questionsRoutes.put("/:id", questionsController.put);

questionsRoutes.delete("/:id", questionsController.delete);

export {questionsRoutes}


