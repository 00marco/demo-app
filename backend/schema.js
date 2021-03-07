const { gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    firstName: String
    lastName: String
    properties: Property
  }

  type Property {
      street: String
      city: String
      state: String
      zip: String
      rent: Float
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    search(search_pattern: String): [User],
  }
`;

module.exports = typeDefs;
