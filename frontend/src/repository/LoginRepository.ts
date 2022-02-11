import Login from "@/entity/Login";
import HttpResource from "./HttpResource";

class LoginRepository {
  login: HttpResource;

  constructor(baseUrl: string) {
    this.login = new HttpResource(baseUrl + "/login");
  }

  async add(dadosLogin: Login) {
    return this.login.post(dadosLogin);
  }
}

export default LoginRepository;
