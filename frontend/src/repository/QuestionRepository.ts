import Question from "@/entity/Question";
import HttpResource from "./HttpResource";

class QuestionRepository {
  questionResource: HttpResource;

  constructor(baseUrl: string) {
    this.questionResource = new HttpResource(baseUrl + "/questions");
  }

  async add(question: Question) {
    return this.questionResource.post(question);
  }

  async update(id: number, question: Question): Promise<Question> {
    return this.questionResource.put(id, question);
  }

  async findByPlayerId(playerId: number): Promise<Question[]> {
    return this.questionResource.get({ playerId });
  }

  async remove(id: number): Promise<void> {
    return this.questionResource.delete(id);
  }
}

export default QuestionRepository;
