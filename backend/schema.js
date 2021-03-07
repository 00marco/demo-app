const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    properties: [Property]
  }

  type Property {
      street: String
      city: String
      state: String
      zip: String
      rent: Float
  }
  
  union SearchResult = User | Property

  type Query {
    search(search_pattern: String): [SearchResult],
  }
`;

module.exports = typeDefs;
