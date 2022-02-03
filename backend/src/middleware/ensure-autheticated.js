const playerRepository = require('../repositories/player-repository');

async function ensureAuthenticated(res, req, next){
    var player = res.cookies.player;    

    if(player === null || player === undefined ){
        req.status(401).send({"message": "Para acessar essa funcionalidade é necessário esta logado!"})
        return;
    }

    let result = await playerRepository.findById(player.id);

    if(result == null){
        req.status(401).send({"message": "Usuário não esta logado!"})
        return;
    }    

    next();
}

module.exports = ensureAuthenticated ;