const Questions = require("../domain/questions.js");
const QuestionsService = require("../services/questions-service.js");
const AppError = require("../shared/errors/appError.js");

var questionsService = new QuestionsService();

exports.post = async (req, res) => {   

  const {createdPlayerId, utterance, answers} = req.body;

  let question = await questionsService.add(
    new Questions(createdPlayerId, utterance, answers)
  );

  if(question instanceof AppError)
    return res.status(question.statusCode).json({
      message: question.message
    });
  else  
    res.status(201).json(question); 
   
};

exports.getByPlayerId = async (req, res) => {
  const {playerId} = req.body;

  var questions = await questionsService.getByPlayerId(playerId);

  if(questions instanceof AppError)
    return res.status(questions.statusCode).json({
      message: questions.message
    });
  else  
    res.status(201).json(questions); 
};

exports.getById = async (req, res) => {
  const {id} = req.params;

  var questions = await questionsService.getById(id);
 
  if(questions instanceof AppError)
    return res.status(questions.statusCode).json({
      message: questions.message
    });
  else  
    res.status(201).json(questions);

};

exports.isCorrect = async (req, res) => {
  const {id, answerId} = req.params;

  var questions = await questionsService.isCorrect(id, answerId);

  if(questions instanceof AppError)
    return res.status(questions.statusCode).json({
      message: questions.message
    });
  else  
    res.status(201).json(questions);
};

exports.put = async (req, res) => {   

  const {id} = req.params;
  const { createdPlayerId, utterance, answers} = req.body;

  var question = await questionsService.update(
    new Questions(createdPlayerId, utterance, answers,id)
  );

  if(question instanceof AppError)
      res.status(question.statusCode).json({
        message: question.message
      });
  else  
    res.status(201).json(question);
  
};

exports.delete = async (req, res) => {
  var result = await questionsService.delete(req.params.id);
  
  if(result instanceof AppError)
      res.status(result.statusCode).json({
        message: result.message
      });
  else  
    res.status(201).json(result);
};