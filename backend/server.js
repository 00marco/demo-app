import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';
import routes from './routes';
// import ApolloServer from 'apollo-server-express';
// import gql from 'apollo-server-express';
import typeDefs from './schema';
import { sequelize } from './models';

const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json({'limit':'50mb'}));
app.use(express.urlencoded({'extended':true}));



app.use('/users', routes.user);
app.use('/properties', routes.property);
app.use((req, res) => {
    res.status(404).send('404 page not found');
});
// app.use('/search', ApolloServer({ schema: typeDefs }));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT} ${__dirname}`);
});
