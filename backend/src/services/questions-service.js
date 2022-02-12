const questionsRepository = require("../repositories/questions-repository");
const playerRepository = require("../repositories/player-repository");
const answersRepository = require("../repositories/answers-repository");
const  AppError = require("../shared/errors/appError");

class QuestionsService {
  async add(question) {
   
      var err = await this.validationQuestion(question);

      if(err instanceof AppError)
        return err;

      var questionSaved = await questionsRepository.save(question);

      questionSaved.answer = [];

      for(let answer of question.answers){

          answer.questionId = questionSaved.id;

          let saved = await answersRepository.save(answer);
          
          questionSaved.answer.push(saved);
      }   

      return questionSaved;
   
  }

  async getByPlayerId(playerId) {
    
    var player = await playerRepository.findById(playerId);
    
    if(player === null )
        return new AppError("Não existe player com o id informado!");

    var result = await questionsRepository.findByPlayerId(playerId);
   
    if(result == null || result == undefined)
        return new AppError("Não ha questão associada a este player");

    var questions = [];

    for(var question of result){
        question.answers = [];
        
        var answers = await answersRepository.findByQuestionId(question.id);
        
        question.answers.push(answers);

        questions.push(question);
    }

    return questions;

  }

  async getById(id) {

    var questions = await questionsRepository.findById(id);

    if(questions == null || questions == undefined)
      return new AppError("Não ha questão cadastrada com esse ID");
        
    questions.answers = await answersRepository.findByQuestionId(questions.id);

    return  questions;

  }

  async isCorrect(id, answerId){
    var answer = await answersRepository.findById(answerId);

    if(answer == null || answer == undefined)
        return new AppError("Não ha resposta com este id");
    
    return answer;
  }

  async update(question) {

    var err = await this.validationQuestion(question);

    if(err instanceof AppError)
      return err;

    await questionsRepository.update(question);
    
    
    for(let answer of question.answers){        
        answer.questionId = question.id;

        await answersRepository.update(answer);                
    }   
    
    return question;   

  }

  async getAll() {    

    var result = await questionsRepository.findAll();
   
    if(result == null || result == undefined)
        return new AppError("Não ha questões no banco", 404);

    var questions = [];

    for(var question of result){
        question.answers = [];
        
        var answers = await answersRepository.findByQuestionId(question.id);
        
        question.answers.push(answers);

        questions.push(question);
    }

    return questions;

  }

  async validationQuestion(question){

    //validando campos de 'question'
    if(question.utterance === null || question.utterance === "" )
        return new AppError("é necessário informar uma descrição da questão!");

    //validando campos de 'player'
    var player = await playerRepository.findById(question.createdPlayerId);
    
    if(player === null || player == [] )
        return new AppError("Não existe player com o id informado!");

    //validando campos de 'answers'
    if(question.answers.length != 4)
        return new AppError("O número de alternativas deve ser igual a quatro!");

    var answerCorrect = question.answers.filter( (a) => a.isCorrect == true);

    if(answerCorrect.length != 1)
        return new AppError("Somente deve existir uma única alternativa correta!");

    if(answerCorrect.length == 0)
        return new AppError("Deve existir pelo menos uma única alternativa correta!");

    var answerVerification = question.answers.filter( (a) => a.description === null || a.description === "" );

    if(answerVerification.length != 0)
        return new AppError("É necessário informar uma descrição para as alternativas");

    if(question.id != undefined ){
        var questionSaved = await questionsRepository.findById(question.id);

        if(questionSaved === null || questionSaved === undefined)
            return new AppError("Não há questão cadastrada com o id informado");
    }

    return undefined;
    
  }

  async delete(id) {

    var question = await questionsRepository.findById(id);

    if(question == null || question == undefined)
      return new AppError("Não ha questão cadastrada com esse ID");

    question.answers = await answersRepository.findByQuestionId(question.id);

    for(let answer of question.answers){
      answersRepository.delete(answer.id);
    }

    questionsRepository.delete(id);

    return {"message": `Questão de id ${id} foi removido com sucesso!`};
  }
  async alternativeEliminate(questionId){

    var answers = answersRepository.findByQuestionId(questionId);

    for(let i = 0;i<answers.length;i++){
        if(!answers[i].isCorrect){
          delete answers[i];
          break;
        }
    }

    return answers;
  }
}

module.exports = QuestionsService;