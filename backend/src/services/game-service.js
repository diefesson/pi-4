const playerRepository = require("../repositories/player-repository");
const statisticsRepository = require("../repositories/statistics-repository.js");

const QuestionService = require("../services/questions-service.js");

const Statistics = require("../domain/statistics.js");
const statusGame = require("../domain/status-game.js");
const awards = require("../domain/prize-value.js");

const AppError = require("../shared/errors/appError.js");
const res = require("express/lib/response");

const questionService = new QuestionService();

class GameService{
    async managerGame(playerId, status, statisticsId ){

        var statistics, result ;
        
        if(playerId === "" || playerId === undefined)
            return new AppError("Necessário informar o id do player que irá jogar!");

        let player = await playerRepository.findById(playerId);

        if(player === null)
            return new AppError("Não existe player cadastrado com o id "+player.id+" !");
        
        if(status == statusGame.NEXT && (statisticsId === "" || statisticsId === undefined ))
            return new AppError("Informe o id da estatistica!");

        if(statisticsId !== "" && statisticsId !== undefined){
            statistics = await statisticsRepository.findById(statisticsId);

            if(statistics === null)
                return new AppError("Não existe estatística cadastrado com o id "+statisticsId+" !");

            if(statistics.round === 7 && statistics.status === statusGame.FINISHED) 
                return new AppError("Partida já finalizada!", 200);

            if(statistics.status === statusGame.FINISHED) 
                return new AppError(`Partida já finalizada! Com o seguinte resultado: '${statistics.statusDescription}'`);
    

        }            

        switch(status) {
            case statusGame.START:
                result = this.start(player);
                break;

            case statusGame.NEXT:
                result = this.next(player, statistics);
                break;

            case statusGame.STOP:
                result = this.stop(player, statistics);
                break;

            case statusGame.ERROR:
                result = this.error(player, statistics);
                break;

            default:
                return new AppError("Status informado da partida é invalida!");

        }

        return result;

    }

    async start(player){

        // verificar se existe algum registro com o status de next ?

        const newStatistics = new Statistics(statusGame.START, "Game iniciado!", 0, 1);
        const statisticsSaved = await statisticsRepository.save(player.id, newStatistics);

        const question = await this.randomQuestion(player);
        console.log(statisticsSaved);
        const valueHit = awards.hit[0].value;
        const valueStop = awards.stop[0].value;
        const valueWrong = awards.wrong[0].value;

        const result = {
            playerId : player.id,
            statisticsId : statisticsSaved.id,
            currentRound: 1,
            question,
            award:{
                hit: valueHit,
                stop: valueStop,
                wrong: valueWrong 
            }

        };

        return result;
    }

    async next(player,statistics){

        let currentRound = statistics.round ;
        
        if(currentRound === 7){
            statistics.status = statusGame.FINISHED;
            statistics.statusDescription = `Jogador ganhou e recebeu o premio de R$ ${awards.hit[currentRound - 1].value}!`;                        
        }else{
            statistics.status = statusGame.NEXT;
            statistics.statusDescription = "Jogador esta jogando!";        
            statistics.round = currentRound + 1;
        }

        statistics.correctTotal = awards.hit[currentRound - 1].value; // player recebeu premio referente ao round X        

        const statisticsUpdate = await statisticsRepository.update(statistics.id, statistics);
        
        const question = await this.randomQuestion();

        const valueHit = awards.hit[currentRound - 1].value;
        const valueStop = awards.stop[currentRound - 1].value;
        const valueWrong = awards.wrong[currentRound - 1].value;

        const result = {
            playerId : player.id,
            statisticsId : statistics.id,
            currentRound: statistics.round,
            question,
            award:{
                hit: valueHit,
                stop: valueStop,
                wrong: valueWrong 
            }

        };

        return result;
    }

    async stop(player, statistics){

        let currentRound = statistics.round ;
        let value = awards.stop[currentRound - 1].value;

        statistics.status = statusGame.FINISHED;
        statistics.statusDescription = `Jogador decidiu parar o jogo no round ${currentRound} e recebeu o premio de R$ ${value}`;
        statistics.correctTotal = value;

        const statisticsUpdate = await statisticsRepository.update(statistics.id, statistics);

        const result = {
            playerId : player.id,            
            statistics
        };

        return result;
    }

    async error(player, statistics){

        let currentRound = statistics.round ;
        let value = awards.wrong[currentRound].value;

        statistics.status = statusGame.FINISHED;
        statistics.statusDescription = `Jogador decidiu parar o jogo no round ${currentRound} e recebeu o premio de R$ ${value}`;
        statistics.correctTotal = value;

        const statisticsUpdate = await statisticsRepository.update(statistics.id, statistics);

        const result = {
            playerId : player.id,            
            statistics
        };

        return result;
    }

    async randomQuestion(){
        
        const questions = await questionService.getAll();
     
        let position = Math.floor(Math.random() * questions.length);
        
        console.log("Posição que deu: "+position, "Quantidade de questões no banco: "+questions.length);
        let question = questions[position];

        return question;
    }

}

module.exports = GameService;