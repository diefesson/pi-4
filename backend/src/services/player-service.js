const Player = require("../domain/player");
const playerRepository = require("../repositories/player-repository");
const AppError = require("../shared/errors/appError");

class PlayerService {
  async add(player) {

    let result = await this.validation(player);

    if(result instanceof AppError)
      return result;

    let searchUsername = await playerRepository.findByUsername(player.username);

    if(searchUsername != null)
      return new AppError("Já existe usuário cadastro com o username '"+player.username+"' ");

    if(player.isAdmin === null || player.isAdmin === undefined)
      player.isAdmin = false;

    return await playerRepository.save(player);
  }

  getAll() {
    return playerRepository.findAll();
  }

  async update(id, player) {
    player.id = id;

    let result = await this.validation(player);

    if(result instanceof AppError)
      return result;

    return playerRepository.update(id, player);
  }

  async delete(id) {
    let player = await playerRepository.findById(id);

    if(player == null)      
      return new AppError("Não existe player cadastrado com o id "+id+" informado ");

    await playerRepository.delete(id);
    
    return {"message": "Player '"+player.username+"' foi deletado"};
  }

  async validation(player){
    //validando username
    if(player.username === "" || player.username === null || player.username === undefined)
      return new AppError("Necessário informa username!");

    if(player.username.length <= 3)
      return new AppError("O username deve ter pelo menos 4 caracteres!");

    //validando password
    if(player.password === "" || player.password === null || player.password === undefined)
      return new AppError("Necessário informa o campo password!");

    if(player.password.length <= 3)
      return new AppError("O password deve ter pelo menos 4 caracteres!");
    
    //validando email
    if(player.email === "" || player.email === null || player.email === undefined)
      return new AppError("Necessário informa o campo email!");

    if(player.email === "" || player.email === null || player.email === undefined)
      return new AppError("O email deve ter pelo menos 6 caracteres!");
    
    if(!player.email.includes("@"))
      return new AppError("O email não é valido!");

    if(player.id != undefined){
      let search = await playerRepository.findById(player.id);

      if(search === null)
        return new AppError("Não existe player cadastrado com o id "+player.id+" informado ");
    }


    return player;
  }
}


module.exports = PlayerService;