import Question from "@/entity/Question";
import QuestionRepository from "@/repository/QuestionRepository";

export default class QuestionService {
  questionRepository: QuestionRepository;

  constructor(questionRepository: QuestionRepository) {
    this.questionRepository = questionRepository;
  }

  async add(question: Question): Promise<Question> {
    return this.questionRepository.add(question);
  }

  async update(id: number, question: Question): Promise<Question> {
    return this.questionRepository.update(id, question);
  }

  async findByPlayerId(playerId: number): Promise<Question[]> {
    return this.questionRepository.findByPlayerId(playerId);
  }

  async remove(id: number): Promise<void> {
    return this.questionRepository.remove(id);
  }
}
