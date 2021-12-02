import 'dotenv/config';

const databaseConfig = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5433,
    define:{
        timestamps: true,
    },
};

export default databaseConfig;