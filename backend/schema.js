const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        properties: Property
    }

    type Property {
        id: ID!
        street: String
        city: String
        state: String
        zip: String
        rent: Float
    }

    type Query {
        search: [User]
      }
`;

module.exports = typeDefs;
