const db = require("../models");
const Player = db.players;

exports.save = async (player) => {
  return Player.create({
    username: player.username,
    password: player.password,
    email: player.email,
    isAdmin: player.isAdmin
  })
    .then((result) => {
      console.log("Created player: " + JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.findAll = async () => {
  const result = await Player.findAll();
  return result;
};

exports.update = async (id, player) => {
  return await Player.update(
    {
      username: player.username,
      password: player.password,
      email: player.email,
      isAdmin: player.isAdmin,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  )
    .then((result) => {
      console.log("Update player: " + JSON.stringify(result));
      return result[1][0]; // Only Postgres, 1 is number of affect records, 0 is first element
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

exports.delete = async (id) => {
  await Player.destroy({
    where: {
      id: id,
    },
  })
};

exports.findById = async (id) =>{
  return Player.findByPk(id)
    .then((result)=>{
      return result
    });
};