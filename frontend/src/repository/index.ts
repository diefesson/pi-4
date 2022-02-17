import QuestionRepository from "./QuestionRepository";
import LoginRepository from "./LoginRepository";
import CadastroRepository from "./CadastroRepository";
import AuthRepository from "./AuthRepository";
import JogoRepository from "./JogoRepository";
import GameRepository from "./GameRepository";
import { BACKEND_URL } from "@/env";

export const questionRepository = new QuestionRepository(BACKEND_URL);
export const loginRepository = new LoginRepository(BACKEND_URL);
export const cadastroRepository = new CadastroRepository(BACKEND_URL);
export const authRepository = new AuthRepository(BACKEND_URL);
export const jogoRepository = new JogoRepository(BACKEND_URL);
export const gameRepository = new GameRepository(BACKEND_URL);
