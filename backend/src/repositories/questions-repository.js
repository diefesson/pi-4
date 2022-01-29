const { QueryTypes } = require('sequelize');
const { answers } = require("../models");
const db = require("../models");
const Questions = db.questions;

exports.save = async (question) => {
  return Questions.create({
    utterance: question.utterance,
    createdPlayerId: question.createdPlayerId,    
  })
    .then((result) => {
      console.log("Created question: " + JSON.stringify(result));
      return result.dataValues;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
    return await Questions.findAll(); 
};

exports.update = async (id, Questions) => {
  return await Questions.update(
    {
        utterance: question.utterance,
        createdPlayerId: question.createdPlayerId, 
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update Question: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Questions.destroy({
    where: {
      id: id,
    },
  });
};

exports.findById = async (id) =>{
  return await Questions.findByPk(id)
    .then(result => {
      return result.dataValues;
    });
};

exports.findByPlayerId = async (playerId) =>{
  return await Questions.findAll({where : {createdPlayerId : playerId}})  
    .then((result) => {
      var questions = [];

      for(let q of result)  
        questions.push(q.dataValues);
        
      return questions;
    }); 
};