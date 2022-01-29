const questionsRepository = require("../repositories/questions-repository");
const playerRepository = require("../repositories/player-repository");
const answersRepository = require("../repositories/answers-repository");

class QuestionsService {
  async add(question) {

    if(question.utterance === null || question.utterance === "" )
        console.log("é necessário informar uma descrição da questão!");//throw 

    var player = await playerRepository.findById(question.createdPlayerId);
    
    if(player === null )
        console.log("Não existe player com o id informado!");

    if(question.answers.length != 4)
        console.log("O número de alternativas deve ser igual a quatro!");

    var answerCorrect = question.answers.filter( (a) => a.isCorrect == true);

    if(answerCorrect.length != 1)
        console.log("Somente deve existir uma única alternativa correta!");

    if(answerCorrect.length == 0)
        console.log("Deve existir pelo menos uma única alternativa correta!");

    var questionSaved = await questionsRepository.save(question);

    console.log("Questão salva: ",questionSaved);
    questionSaved.answer = [];

    for(let answer of question.answers){
        console.log("Salvando pergunta:", answer);

        if(answer.description === null || answer.description === "" )
            console.log("é necessário informar uma descrição para as alternativas");//throw 

        answer.questionId = questionSaved.id;

        let saved = await answersRepository.save(answer);
        
        questionSaved.answer.push(saved);
    }   

    return questionSaved;
  }

  async getByPlayerId(playerId) {
    var player = await playerRepository.findById(playerId);
    
    if(player === null )
        console.log("Não existe player com o id informado!");

    var result = await questionsRepository.findByPlayerId(playerId);
   
    if(result == null || result == undefined)
        console.log("Não ha questão associada a este player");

    var questions = [];

    for(var question of result){
        question.answers = [];
        
        var answers = await answersRepository.findByQuestionId(question.id);
        
        question.answers.push(answers);

        questions.push(question);
    }

    return questions;

  }

  async getById(questionId) {
    
    var questions = await questionsRepository.findById(questionId);

    if(questions == null || questions == undefined)
        console.log("Não ha questão cadastrada com esse ID");
        
    questions.answers = await answersRepository.findByQuestionId(questions.id);

    return questions;

  }

  async isCorrect(id, answerId){
    var answer = await answersRepository.findById(answerId);

    if(answer == null || answer == undefined)
        console.log("Não ha resposta com este id");
    
    return answer;
  }

//   update(id, question) {
//     return questionsRepository.update(id, question);
//   }

//   delete(id) {
//     return questionsRepository.delete(id);
//   }
}

module.exports = QuestionsService;