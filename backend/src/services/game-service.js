const playerRepository = require("../repositories/player-repository");
const statisticsRepository = require("../repositories/statistics-repository.js");

const QuestionService = require("../services/questions-service.js");

const Statistics = require("../domain/statistics.js");
const statusGame = require("../domain/status-game.js");
const awards = require("../domain/prize-value.js");

const AppError = require("../shared/errors/appError.js");

const questionService = new QuestionService();

class GameService{
    async managerGame(playerId, status, statisticsId ){
        
        if(playerId === "" || playerId === undefined)
            return new AppError("Necessário informar o id do player que irá jogar!");

        let player = await playerRepository.findById(playerId);

        if(player === null)
            return new AppError("Não existe player cadastrado com o id "+player.id+" informado ");

        switch(status) {
            case statusGame.START:
                this.start(player);
                break;

            case statusGame.STOP:

                break;

            default:
                return new AppError("Status informado da partida é invalida!");

        }

    }

    async start(player){

        const newStatistics = new Statistics(statusGame.START, "Game iniciado", 0, 1);
        const statistics = await statisticsRepository.save(player.id, newStatistics);

        // gerar a pergunta e busca-la
        // const question = await randomQuestion(player);

        const valueHit = awards.hit[0].value;
        const valueStop = awards.stop[0].value;
        const valueWrong = awards.wrong[0].value;

        const result = {
            playerId = player.id,
            statisticsId = statistics.id,
            question,
            award:{
                hit: valueHit,
                stop: valueStop,
                wrong: valueWrong 
            }

        };

        return result;
    }

    async randomQuestion(player){
        // como gerar uma pergunta ?
        const question = await questionService.getById(x);

        return question;
    }
}

module.exports = GameService;