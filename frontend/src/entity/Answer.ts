export default class Answer {
  id: number;
  questionId: number;
  description: string;
  isCorrect: boolean;

  constructor(
    id: number,
    questionId: number,
    description: string,
    isCorrect: boolean
  ) {
    this.id = id;
    this.questionId = questionId;
    this.description = description;
    this.isCorrect = isCorrect;
  }
}
