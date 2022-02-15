export default class Jogo {
  playerId: number;
  status: string;

  constructor(playerId: number, status: string) {
    this.playerId = playerId;
    this.status = status;
  }
}
