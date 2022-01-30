const Player = require("../domain/player.js");
const PlayerService = require("../services/player-service.js");
var playerService = new PlayerService();

exports.get = async (req, res) => {
  res.json(await playerService.getAll());
};

exports.post = async (req, res) => {
    let player = await playerService.add(
      new Player(req.body.username, req.body.password, req.body.email, req.body.isAdmin)
    );

    if (player != null) {
      res.status(201).json(player);
    } else {
      res.status(409).send();
    }
};

exports.put = async (req, res) => {
  res.json(
    await playerService.update(
      req.params.id,
      new Player(req.body.username, req.body.password, req.body.email, req.body.isAdmin)
    )
  );
};

exports.delete = (req, res) => {
  res.json(playerService.delete(req.params.id));
};