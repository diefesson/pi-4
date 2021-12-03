import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import {router}  from './routes';

var app = express();

app.use(express.json());

app.use(router);

export {app};