const db = require("../models");
const Analysis = db.analysis;
const { Op } = require("sequelize");

exports.save = async (playerId, questionId, analysis) => {
    return await Analysis.create({
      status: analysis.status,
      playerId: playerId,
      questionId: questionId,
    })
      .then((result) => {
        console.log("Created analysis of question: " + JSON.stringify(result));
        return result;
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
};
  
exports.findAll = async () => {
    const result = await Analysis.findAll();
    return result;
};

exports.update = async (id, analysis) => {
    return await Analysis.update(
      {
        status: analysis.status,
      },
      {
        where: {
          id: id,
        },
        returning: true,
      }
    )
      .then((result) => {
        console.log("Update analysis of questions: " + JSON.stringify(result));
        return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
};
  
exports.delete = async (id) => {
    await Analysis.destroy({
      where: {
        id: id,
      },
    });
};