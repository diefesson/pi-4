import QuestionRepository from "./QuestionRepository";
import LoginRepository from "./LoginRepository";
import CadastroRepository from "./CadastroRepository";
import AuthRepository from "./AuthRepository";

const backend_url = process.env.VUE_APP_BACKEND_URL;

export const questionRepository = new QuestionRepository(backend_url);
export const loginRepository = new LoginRepository(backend_url);
export const cadastroRepository = new CadastroRepository(backend_url);
export const authRepository = new AuthRepository(backend_url);
