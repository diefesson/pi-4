const Questions = require("../domain/questions.js");
const QuestionsService = require("../services/questions-service.js");
var questionsService = new QuestionsService();

exports.get = async (req, res) => {
  res.json(await questionsService.getAll());
};

exports.post = async (req, res) => {
    console.log('Chegou aqui ebaaaaaaa');

    var {createdPlayerId, utterance, answers} = req.body;

    let question = await questionsService.add(
      new Questions(createdPlayerId, utterance, answers)
    );

    if (question != null) {
      res.status(201).json(question);
    } else {
      res.status(409).send();
    }
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