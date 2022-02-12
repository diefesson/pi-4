export default class Login {
    username: string;
    password: string;
  
    constructor(
        username: string,
        password: string
    ) {
      this.username = username;
      this.password = password;
    }
  }

  export type LoginResponse = {
    player: {
      id: number,
      username: string,
      email: string,
    }
  }