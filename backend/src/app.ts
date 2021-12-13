import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import cors from "cors";
import express, { NextFunction, Request, Response } from 'express';
import {router}  from './routes';
import createConnection from './database';
import "./shared/container";
import { AppError } from './shared/errors/AppError';

createConnection();
var app = express();

const corsOptions = {
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.use((err:Error, request: Request, response: Response, next: NextFunction) => {

    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return  response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`
    });
    
});

export {app};