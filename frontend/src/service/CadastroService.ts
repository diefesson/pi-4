import Cadastro from "@/entity/Cadastro";
import CadastroRepository from "@/repository/CadastroRepository";

export default class LoginService {
  cadastroRepository: CadastroRepository;

  constructor(cadastroRepository: CadastroRepository) {
    this.cadastroRepository = cadastroRepository;
  }

  async add(dadosLogin: Cadastro): Promise<string> {
    
    return this.cadastroRepository.add(dadosLogin);
  }
}
