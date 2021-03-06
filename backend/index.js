require = require('esm')(module);

const { sequelize, Property, User } = require('./models');
const { ApolloServer, gql } = require('apollo-server');

module.exports = require('./server.js');

sequelize.sync();
