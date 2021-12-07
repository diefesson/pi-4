import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import {router}  from './routes';
import createConnection from './database';
import "./shared/container";

createConnection();
var app = express();

app.use(express.json());

app.use(router);


export {app};