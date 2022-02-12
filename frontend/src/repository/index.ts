import QuestionRepository from "./QuestionRepository";
import LoginRepository from "./LoginRepository";
import CadastroRepository from "./CadastroRepository";

const backend_url = process.env.VUE_APP_BACKEND_URL;

export const questionRepository = new QuestionRepository(backend_url);
export const loginRepository = new LoginRepository(backend_url);
export const cadastroRepository = new CadastroRepository(backend_url);

export default { questionRepository, loginRepository, cadastroRepository };
