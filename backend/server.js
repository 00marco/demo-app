import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';
import routes from './routes';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './schema';
import { sequelize, User, Property } from './models';

const app = express();





app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
app.use(morgan('combined'));
app.use(express.json({'limit':'50mb'}));
app.use(express.urlencoded({'extended':true}));


app.use('/users', routes.user);
app.use('/properties', routes.property);

const resolvers = {
  Query: {
    search: async (parent, args, context, info) => {
      var users = await User.findAll({
        where : {
          firstName : args.search_pattern
        }
      });

      users.forEach(user => {
        console.log(user.id);
        user.properties = Property.findAll({ where: { userId: user.id}});
        console.log(user.properties);

      });
      return users;
    },

  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


app.use((req, res) => {
    res.status(404).send('404 page not found');
});


app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
