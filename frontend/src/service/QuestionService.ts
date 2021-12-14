import Question from "@/entity/Question";
import CrudRepository from "@/repository/CrudRepository";
import CrudService from "./CrudService";

export default class QuestionService extends CrudService<Question> {
  constructor(repository: CrudRepository<Question>) {
    super(repository);
  }
}
