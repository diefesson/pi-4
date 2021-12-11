import repository from "@/repository";
import QuestionService from "./QuestionService";

const questionService = new QuestionService(repository.questionRepository);

export default {
    questionService
};