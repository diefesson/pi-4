import {
  questionRepository,
  loginRepository,
  cadastroRepository,
  authRepository,
  jogoRepository,
  gameRepository,
} from "@/repository";
import QuestionService from "./QuestionService";
import LoginService from "./LoginService";
import CadastroService from "./CadastroService";
import AuthService from "./AuthService";
import JogoService from "./JogoService";
import GameService from "./GameService";

export const questionService = new QuestionService(questionRepository);
export const loginService = new LoginService(loginRepository);
export const cadastroService = new CadastroService(cadastroRepository);
export const authService = new AuthService(authRepository);
export const jogoService = new JogoService(jogoRepository);
export const gameService = new GameService(gameRepository, authRepository);
