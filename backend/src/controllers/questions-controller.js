const Questions = require("../domain/questions.js");
const QuestionsService = require("../services/questions-service.js");
var questionsService = new QuestionsService();

exports.post = async (req, res) => {   
    const {createdPlayerId, utterance, answers} = req.body;

    let question = await questionsService.add(
      new Questions(createdPlayerId, utterance, answers)
    );

    if (question != null) {
      res.status(201).json(question);
    } else {
      res.status(409).send();
    }
};

exports.getByPlayerId = async (req, res) => {
  const {playerId} = req.body;

  res.json(await questionsService.getByPlayerId(playerId));
};

exports.getById = async (req, res) => {
  const {id} = req.params;

  res.json(await questionsService.getById(id));
};

exports.isCorrect = async (req, res) => {
  const {id, answerId} = req.params;

  res.json(await questionsService.isCorrect(id, answerId));
};
// exports.put = async (req, res) => {
//   res.json(
//     await questionsService.update(
//       req.params.id,
//       new Product(req.body.username, req.body.password, req.body.email, req.body.isAdmin)
//     )
//   );
// };

// exports.delete = (req, res) => {
//   res.json(questionsService.delete(req.params.id));
// };