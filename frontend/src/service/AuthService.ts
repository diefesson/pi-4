import { authRepository } from "@/repository";
import AuthRepository from "@/repository/AuthRepository";

export default class AuthService {
  authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(username: string, password: string): Promise<any> {
    return authRepository.login(username, password);
  }

  logout(): void {
    this.authRepository.logout();
  }

  isAuthenticated(): boolean {
    return this.authRepository.isAuthenticated();
  }

  getId(): number | null {
    return this.authRepository.getId();
  }

  getUsername(): string | null {
    return this.authRepository.getUsername();
  }
}
