const { ARRAY } = require("sequelize");
const Questions = require("../domain/questions.js");
const QuestionsService = require("../services/questions-service.js");
const AppError = require("../shared/errors/appError.js");

var questionsService = new QuestionsService();

exports.post = async (req, res) => {   

  const {createdPlayerId, utterance, answers} = req.body;

  let question = await questionsService.add(
    new Questions(createdPlayerId, utterance, answers)
  );

  res = validation(res, question);
   
};

exports.getByPlayerId = async (req, res) => {
  const {playerId} = req.body;

  var questions = await questionsService.getByPlayerId(playerId);

  res = validation(res, questions); 
};

exports.getById = async (req, res) => {
  const {id} = req.params;

  var questions = await questionsService.getById(id);
 
  res = validation(res, questions);

};

exports.isCorrect = async (req, res) => {
  const {id, answerId} = req.params;

  var questions = await questionsService.isCorrect(id, answerId);

  res = validation(res, questions);
};

exports.put = async (req, res) => {   

  const {id} = req.params;
  const { createdPlayerId, utterance, answers} = req.body;

  var question = await questionsService.update(
    new Questions(createdPlayerId, utterance, answers,id)
  );

  res = validation(res, question);
  
};

exports.delete = async (req, res) => {
  var result = await questionsService.delete(req.params.id);
  
  res = validation(res, result) ;
};

async function validation(res, question){
  
  if(question instanceof AppError)
    res.status(question.statusCode).json({
      message: question.message
  });
  else  
    res.status(201).json(question); 

  return res;
}

exports.EliminateAnswer = async (req) => {   
  const { questionId } = req.body;

  var answers = await questionsService.alternativeEliminate(questionId);

  return JSON.stringify(answers);
};