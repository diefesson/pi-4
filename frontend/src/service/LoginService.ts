import Login, { LoginResponse } from "@/entity/Login";
import LoginRepository from "@/repository/LoginRepository";

export default class LoginService {
  loginRepository: LoginRepository;

  constructor(loginRepository: LoginRepository) {
    this.loginRepository = loginRepository;
  }

  async add(dadosLogin: Login): Promise<LoginResponse> {
    
    return this.loginRepository.add(dadosLogin);
  }
}
