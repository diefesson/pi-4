export default class Answer {
  description: string;
  isCorrect: boolean;

  constructor(description: string, isCorrect: boolean) {
    this.description = description;
    this.isCorrect = isCorrect;
  }
}
