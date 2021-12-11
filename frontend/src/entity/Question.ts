import Answer from "./Answer";

export default class Question {
  id: number;
  utterance: string;
  answers: Answer[];

  constructor(id: number, utterance: string, answers: Answer[]) {
    this.id = id;
    this.utterance = utterance;
    this.answers = answers;
  }
}
