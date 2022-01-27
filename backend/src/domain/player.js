class Player {
  constructor(username, password, email, isAdmin) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}

module.exports = Player;