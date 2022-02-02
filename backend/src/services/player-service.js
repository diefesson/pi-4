const bcrypt = require("bcrypt");
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

    let hashPassword = await bcrypt.hash(player.password, process.env.CRYPTO_CODE);

    player.password = hashPassword;

    let playerSaved = await playerRepository.save(player);
      
    return this.playerToReturn(playerSaved);
  }

  async getAll() {

    var playerArray = await playerRepository.findAll();
    var players = [];

    for(let p of playerArray)            
      players.push(await this.playerToReturn(p));
    
    return players;
  }

  async update(id, player) {
    player.id = id;

    let result = await this.validation(player);

    if(result instanceof AppError)
      return result;
    
    let hashPassword = await bcrypt.hash(player.password, process.env.CRYPTO_CODE);

    player.password = hashPassword;

    let playerUpdated = await playerRepository.update(id, player)

    return this.playerToReturn(playerUpdated) ;
  }

  async delete(id) {
    let player = await playerRepository.findById(id);

    if(player == null)      
      return new AppError("Não existe player cadastrado com o id "+id+" informado ");

    await playerRepository.delete(id);
    
    return {"message": "Player '"+player.username+"' foi deletado"};
  }

  async login(username, password){

    let player = await playerRepository.findByUsername(username);

    if(player == null)
      return new AppError("Username ou Password estão invalidos!");
    // testar bcrypt
    let isMatch = await bcrypt.compare(password, player.password);
    
    if(!isMatch)
      return new AppError("Username ou Password estão invalidos!");

    let playerReturn = this.playerToReturn(player);

    // gerar token

    return {
      "player" : playerReturn,
      "cookie" : "aaaaa"
    };
  }

  async playerToReturn(player){
    /*
    Tem como função mapear o registro do player armazenado no banco,
    para um objeto sem o atributo 'password' por razões de segurança.
    */

    var result = {
      "id": player.id,
      "username": player.username,
      "email": player.email      
    };

    return result;
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