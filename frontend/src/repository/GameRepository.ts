import GameCommand from "@/entity/GameCommand";
import HttpResource from "./HttpResource";

export default class GameRepository {
  gameResource: HttpResource;

  constructor(baseUrl: string) {
    this.gameResource = new HttpResource(baseUrl + "/game");
  }

  async sendCommand(gameCommand: GameCommand): Promise<any> {
    return this.gameResource.post(gameCommand);
  }
}
