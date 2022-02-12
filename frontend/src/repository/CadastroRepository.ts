import Cadastro from "@/entity/Cadastro";
import HttpResource from "./HttpResource";

class CadastroRepository {
  cadastro: HttpResource;

  constructor(baseUrl: string) {
    this.cadastro = new HttpResource(baseUrl + "/players");
  }

  async add(dadosCadastro: Cadastro) {
    return this.cadastro.post(dadosCadastro);
  }
}

export default CadastroRepository;
