const db = require("../models");
const Statistics = db.statistics;
const { Op } = require("sequelize");

exports.save = async (playerId, statistics) => {
    return await Statistics.create({
      status: statistics.status,
      statusDescription: statistics.statusDescription,
      correctTotal: statistics.correctTotal,
      playerId: playerId
    })
      .then((result) => {
        console.log("Created statistic: " + JSON.stringify(result));
        return result;
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
};
  
exports.findAll = async () => {
    const result = await Statistics.findAll();
    return result;
};

exports.update = async (id, statistic) => {
    return await Statistics.update(
      {
        status: statistic.status,
        statusDescription: statistic.statusDescription,
        correctTotal: statistic.correctTotal,
      },
      {
        where: {
          id: id,
        },
        returning: true,
      }
    )
      .then((result) => {
        console.log("Update statistic: " + JSON.stringify(result));
        return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
};
  
exports.delete = async (id) => {
    await Statistics.destroy({
      where: {
        id: id,
      },
    });
};

exports.findById = async (id) =>{
  return await Statistics.findByPk(id)
    .then(result => {
      return result === null? null : result.dataValues;
    });
};