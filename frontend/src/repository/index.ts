import QuestionRepository from "./QuestionRepository";

const backend_url = process.env.VUE_APP_BACKEND_URL;

const questionRepository = new QuestionRepository(backend_url);

export default { questionRepository };