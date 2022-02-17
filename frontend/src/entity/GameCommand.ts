export const enum GameStatus {
  START = "start",
  NEXT = "next",
  ERROR = "stop",
  STOP = "stop",
}

export default class GameCommand {
  playerId: number;
  status: GameStatus;
  statisticsId?: number;

  constructor(playerId: number, status: GameStatus, statisticsId?: number) {
    this.playerId = playerId;
    this.status = status;
    this.statisticsId = statisticsId;
  }
}
