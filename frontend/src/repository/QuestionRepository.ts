import Question from "@/entity/Question";
import AxiosRepository from "./AxiosRepository";

class QuestionRepository extends AxiosRepository<Question> {
  constructor(baseUrl: string, endpointUrl = "/question") {
    super(baseUrl + endpointUrl);
  }
}

export default QuestionRepository;
