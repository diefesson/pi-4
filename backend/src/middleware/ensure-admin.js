const playerRepository = require('../repositories/player-repository');

async function ensureAdmin(res, req, next){
    var player = res.cookies.player;    

    if(player === null || player === undefined ){
        req.status(401).send({"message": "Para acessar essa funcionalidade é necessário esta logado!"});
        return;
    }

    let result = await playerRepository.findById(player.id);

    if(result == null){
        req.status(401).send({"message": "Usuário não esta logado!"});
        return;
    }    

    if(!result.isAdmin){
        req.status(401).send({"message": "Usuário não tem permissão para acessar esta funcionalidade"});
        return;
    }  

    next();
}

module.exports = ensureAdmin ;