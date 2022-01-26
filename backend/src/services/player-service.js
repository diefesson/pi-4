const playerRepository = require("../repositories/player-repository");

class PlayerService {
  add(player) {
    return playerRepository.save(player);
  }

  getAll() {
    return playerRepository.findAll();
  }

  update(id, player) {
    return playerRepository.update(id, player);
  }

  delete(id) {
    return playerRepository.delete(id);
  }
}

module.exports = PlayerService;