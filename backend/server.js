import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';
import routes from './routes';

const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json({'limit':'50mb'}));
app.use(express.urlencoded({'extended':true}));
