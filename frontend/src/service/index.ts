import { questionRepository } from "@/repository";
import { loginRepository } from "@/repository";
import { cadastroRepository } from "@/repository";
import { jogoRepository } from "@/repository";
import QuestionService from "./QuestionService";
import LoginService from "./LoginService";
import CadastroService from "./CadastroService";
import JogoService from "./JogoService";

export const questionService = new QuestionService(questionRepository);
export const loginService = new LoginService(loginRepository);
export const cadastroService = new CadastroService(cadastroRepository);
export const jogoService = new JogoService(jogoRepository);
