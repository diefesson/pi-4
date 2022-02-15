export default class Answer {
  description: string;
  isCorrect: boolean;
  id?: number;
  questionId?: number;

  constructor(
    description: string,
    isCorrect: boolean,
    id?: number,
    questionId?: number
  ) {
    this.description = description;
    this.isCorrect = isCorrect;
    this.id = id;
    this.questionId = questionId;
  }
}
