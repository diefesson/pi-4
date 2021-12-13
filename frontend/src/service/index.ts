import { questionRepository } from "@/repository";
import QuestionService from "./QuestionService";

export const questionService = new QuestionService(questionRepository);
