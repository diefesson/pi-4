const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

sequelize.sync({
  alter: true,
});

const db = {};

db.players = require("./player-model")(sequelize, Sequelize);
db.statistics = require("./statistics-model")(sequelize, Sequelize);
db.questions = require("./questions-model")(sequelize, Sequelize);
db.answers = require("./answers-model")(sequelize, Sequelize);

db.players.hasMany(db.statistics);
db.statistics.belongsTo(db.players);

module.exports = db;