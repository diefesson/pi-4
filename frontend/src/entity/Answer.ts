export default class Answer {
  id: number;
  description: string;
  isCorrect: boolean;

  constructor(id: number, description: string, isCorrect: boolean) {
    this.id = id;
    this.description = description;
    this.isCorrect = isCorrect;
  }
}
