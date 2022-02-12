
const GameService = require("../services/game-service.js");
const AppError = require("../shared/errors/appError.js");

var gameService = new GameService();

exports.post = async (req, res) => {

    const {playerId, status, statisticsId } = req.body;

    let game = await gameService.managerGame(playerId, status, statisticsId );

    
    if(game instanceof AppError)
        res.status(game.statusCode).json({
            message: game.message
        });
    else  
        res.status(201).json(game); 

    return res;  
};
