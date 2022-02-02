const Player = require("../domain/player.js");
const PlayerService = require("../services/player-service.js");
const AppError = require("../shared/errors/appError.js");

var playerService = new PlayerService();

exports.get = async (req, res) => {
  let player = await playerService.getAll();
  
  res = validation(res, player);  
};

exports.post = async (req, res) => {
  let player = await playerService.add(
    new Player(req.body.username, req.body.password, req.body.email, req.body.isAdmin)
  );

  res = validation(res, player);  
};

exports.put = async (req, res) => {
  
  let player = new Player(req.body.username, req.body.password, req.body.email, req.body.isAdmin);

  let playerUpdated = await playerService.update(
                  req.params.id, player );
  
  res = validation(res, playerUpdated);  
};

exports.delete = async (req, res) => {
  let player = await playerService.delete(req.params.id);

  res = validation(res, player);  
};

exports.login = async (req, res) => {
  let {username, password } = req.body;

  let result = await playerService.login(username, password);

  res = validation(res, result);  
};

async function validation(res, player){
  
  if(player instanceof AppError)
    res.status(player.statusCode).json({
      message: player.message
  });
  else  
    res.status(201).json(player); 

  return res;
}