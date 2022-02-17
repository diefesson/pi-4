import AuthRepository from "@/repository/AuthRepository";
import GameRepository from "@/repository/GameRepository";

const KEY_STATISTICS_ID = "statisticsId";
const KEY_PRIZE = "prize";

export default class GameService {
  gameRepository: GameRepository;
  authRepository: AuthRepository;

  constructor(gameRepository: GameRepository, authRepository: AuthRepository) {
    this.gameRepository = gameRepository;
    this.authRepository = authRepository;
  }

  async startGame() {
    return this.gameRepository.startGame(this.authRepository.getId()!);
  }

  async next() {
    return this.gameRepository.next(this.authRepository.getId()!);
  }

  async error() {
    return this.gameRepository.error(this.authRepository.getId()!);
  }

  async stopGame() {
    return this.gameRepository.stopGame(this.authRepository.getId()!);
  }

  isPlaying(): boolean {
    return this.gameRepository.isPlaying();
  }

  getGame(): any {
    return this.gameRepository.getGame();
  }
}
