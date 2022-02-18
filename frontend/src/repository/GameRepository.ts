import { GameStatus } from "@/entity/GameCommand";
import GameCommand from "@/entity/GameCommand";
import HttpResource from "./HttpResource";

const KEY_GAME = "game";
const KEY_PLAYING = "playing";

export default class GameRepository {
  gameResource: HttpResource;

  constructor(baseUrl: string) {
    this.gameResource = new HttpResource(baseUrl + "/game");
  }

  async startGame(playerId: number): Promise<any> {
    const command = new GameCommand(playerId, GameStatus.START);
    const result = await this.gameResource.post(command);
    this.setGame(result);
    this.setPlaying(true);
    return result;
  }

  async next(playerId: number): Promise<any> {
    const statisticsId = this.getGame().statisticsId;
    const command = new GameCommand(playerId, GameStatus.NEXT, statisticsId);
    const result = await this.gameResource.post(command);
    this.setGame(result);
    this.setPlaying(true);
    return result;
  }

  async error(playerId: number): Promise<any> {
    const statisticsId = this.getGame().statisticsId;
    const command = new GameCommand(playerId, GameStatus.ERROR, statisticsId);
    const result = await this.gameResource.post(command);
    this.setPlaying(false);
    return result;
  }

  async stopGame(playerId: number): Promise<any> {
    const statisticsId = this.getGame().statisticsId;
    const command = new GameCommand(playerId, GameStatus.STOP, statisticsId);
    const result = await this.gameResource.post(command);
    this.setPlaying(false);
    return result;
  }

  finalize() {
    this.setPlaying(false);
  }

  setPlaying(playing: boolean) {
    const json = JSON.stringify(playing);
    localStorage.setItem(KEY_PLAYING, playing.toString());
  }

  isPlaying(): boolean {
    const playing = localStorage.getItem(KEY_PLAYING);
    if (playing != null) {
      return JSON.parse(playing);
    } else {
      return false;
    }
  }

  setGame(game: any) {
    const json = JSON.stringify(game);
    localStorage.setItem(KEY_GAME, json);
  }

  getGame(): any | null {
    const json = localStorage.getItem(KEY_GAME);
    if (json != null) {
      return JSON.parse(json);
    } else {
      return null;
    }
  }
}
