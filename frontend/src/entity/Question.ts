import Answer from "./Answer";

export default class Question {
  id: number;
  createdPlayerId: number;
  utterance: string;
  answers: Answer[];

  constructor(
    id: number,
    createdPlayerId: number,
    utterance: string,
    answers: Answer[]
  ) {
    this.id = id;
    this.createdPlayerId = createdPlayerId;
    this.utterance = utterance;
    this.answers = answers;
  }
}
