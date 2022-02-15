import Answer from "./Answer";

export default class Question {
  createdPlayerId: number;
  utterance: string;
  answers: Answer[];
  id?: number;

  constructor(
    createdPlayerId: number,
    utterance: string,
    answers: Answer[],
    id?: number
  ) {
    this.createdPlayerId = createdPlayerId;
    this.utterance = utterance;
    this.answers = answers;
    this.id = id;
  }
}
