import HttpResource from "./HttpResource";

const KEY_ID = "id";
const KEY_USERNAME = "username";

export default class AuthRepository {
  loginResource: HttpResource;

  constructor(baseUrl: string) {
    this.loginResource = new HttpResource(baseUrl + "/login");
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(KEY_ID) != null;
  }

  async login(username: string, password: string): Promise<any> {
    const response = await this.loginResource.post({ username, password });
    const player = response.player;
    localStorage.setItem(KEY_ID, player.id);
    localStorage.setItem(KEY_USERNAME, player.username);
    return response;
  }

  logout(): void {
    localStorage.removeItem(KEY_ID);
    localStorage.removeItem(KEY_USERNAME);
  }

  getId(): number | null {
    if (this.isAuthenticated()) {
      return parseInt(localStorage.getItem(KEY_ID) as string);
    } else {
      return null;
    }
  }

  getUsername(): string | null {
    if (this.isAuthenticated()) {
      return localStorage.getItem(KEY_USERNAME) as string;
    } else {
      return null;
    }
  }
}
