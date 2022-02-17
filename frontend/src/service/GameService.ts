import GameCommand, { GameStatus } from "@/entity/GameCommand";
import AuthRepository from "@/repository/AuthRepository";
import GameRepository from "@/repository/GameRepository";

export default class GameService {
  gameRepository: GameRepository;
  authRepository: AuthRepository;
  statisticsId?: number;

  constructor(gameRepository: GameRepository, authRepository: AuthRepository) {
    this.gameRepository = gameRepository;
    this.authRepository = authRepository;
  }

  async startGame(): Promise<any> {
    const command = new GameCommand(
      this.authRepository.getId()!,
      GameStatus.START
    );
    const result = await this.gameRepository.sendCommand(command);
    this.statisticsId = result.statisticsId;
    return result;
  }

  async next(): Promise<any> {
    const command = new GameCommand(
      this.authRepository.getId()!,
      GameStatus.NEXT,
      this.statisticsId!
    );
    return this.gameRepository.sendCommand(command);
  }

  async error(): Promise<any> {
    const command = new GameCommand(
      this.authRepository.getId()!,
      GameStatus.ERROR,
      this.statisticsId!
    );
    const result = await this.gameRepository.sendCommand(command);
    this.statisticsId = undefined;
    return result;
  }

  async stopGame(): Promise<any> {
    const command = new GameCommand(
      this.authRepository.getId()!,
      GameStatus.STOP,
      this.statisticsId!
    );
    const result = await this.gameRepository.sendCommand(command);
    this.statisticsId = undefined;
    return result;
  }
}
