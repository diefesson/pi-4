import Jogo from "@/entity/Jogo";
import JogoRepository from "@/repository/JogoRepository";

export default class LoginService {
  jogoRepository: JogoRepository;

  constructor(jogoRepository: JogoRepository) {
    this.jogoRepository = jogoRepository;
  }

  async add(dadosJogo: Jogo): Promise<string> {
    
    return this.jogoRepository.add(dadosJogo);
  }
}
