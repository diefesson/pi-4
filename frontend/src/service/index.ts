import { questionRepository } from "@/repository";
import { loginRepository } from "@/repository";
import QuestionService from "./QuestionService";
import LoginService from "./LoginService";

export const questionService = new QuestionService(questionRepository);
export const loginService = new LoginService(loginRepository);
