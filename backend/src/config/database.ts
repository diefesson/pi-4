import 'dotenv/config';
import {Dialect} from 'sequelize';

interface IDBConfig{
    dialect : Dialect,
    host: string,
    username:string,
    password: string,
    database: string,
    port: number,
    define:{
        timestamps: true,
    }
}
const databaseConfig:IDBConfig = {
    dialect: 'postgres',
    host: process.env.DB_HOST as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    port: 5433,
    define:{
        timestamps: true,
    }
};

export default databaseConfig;