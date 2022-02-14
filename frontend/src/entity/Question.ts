import Answer from "./Answer";

export default class Question {
  createdPlayerId: number | null;
  utterance: string;
  answers: Answer[];

  constructor(createdPlayerId: number, utterance: string, answers: Answer[]) {
    this.createdPlayerId = createdPlayerId;
    this.utterance = utterance;
    this.answers = answers;
  }
}
