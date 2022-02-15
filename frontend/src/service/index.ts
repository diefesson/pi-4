import {
  questionRepository,
  loginRepository,
  cadastroRepository,
  authRepository,
} from "@/repository";
import QuestionService from "./QuestionService";
import LoginService from "./LoginService";
import CadastroService from "./CadastroService";
import AuthService from "./AuthService";

export const questionService = new QuestionService(questionRepository);
export const loginService = new LoginService(loginRepository);
export const cadastroService = new CadastroService(cadastroRepository);
export const authService = new AuthService(authRepository);
