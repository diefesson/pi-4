const db = require("../models");
const Answers = db.answers;

exports.save = async (answers) => {
  return Answers.create({
    description: answers.description,
    questionId: answers.questionId,    
    isCorrect: answers.isCorrect
  })
    .then((result) => {
      console.log("Created answer: " + JSON.stringify(result));
      return result.dataValues;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};


exports.update = async (id, Answers) => {
  return await Answers.update(
    {
        description: answers.description,
        questionId: answers.questionId,    
        isCorrect: answers.isCorrect
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update answer: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Answers.destroy({
    where: {
      id: id,
    },
  });
};

exports.findById = async (id) =>{
  return await Answers.findByPk(id)
    .then((result) => {      
      return result.dataValues;
    });
};


exports.findByQuestionId = async (questionId) =>{
  return await Answers.findAll({where : {questionId : questionId}})
    .then((result) => {
      var answers = [];

      for(let a of result)  
        answers.push(a.dataValues);
        
      return answers;
    }); 
};