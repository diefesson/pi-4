import Jogo from "@/entity/Jogo";
import HttpResource from "./HttpResource";

class JogoRepository {
  jogo: HttpResource;

  constructor(baseUrl: string) {
    this.jogo = new HttpResource(baseUrl + "/game");
  }

  async add(dadosJogo: Jogo) {
    return this.jogo.post(dadosJogo);
  }
}

export default JogoRepository;
