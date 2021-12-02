// import Sequelize from "sequelize";
import databaseConfig from '../config/database';
const Players = require('../models/Players');

const Sequelize = require('sequelize');

const connection = new Sequelize.Sequelize(databaseConfig);

Players.init(connection);

export default connection;

