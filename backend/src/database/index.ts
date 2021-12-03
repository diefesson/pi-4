import * as Sequelize from 'sequelize';
import db from '../config/database';

const connection = new Sequelize.Sequelize(db);

export default connection;

