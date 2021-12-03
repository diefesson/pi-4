import databaseConfig from '../config/database';

const Sequelize = require('sequelize');

const connection = new Sequelize.Sequelize(databaseConfig);

export default connection;

