const { gql } = require('@apollo/server');
const { campaignTypeDefs } = require('./campaignTypeDefs');

const userTypeDefs = gql`
  scalar Upload
  type User {
    _id: ID!
    email: String!
    username: String!
    profilePicture: String
    createdAt: String
    updatedAt: String
    campaigns: [Campaign]
    bestiary: [Bestiary]
  }

  type Query {
    getUserById(userId: ID!): User
    authenticate: User
  }

  type Mutation {
    register(email: String!, username: String!, password: String!): User
    login(identifier: String!, password: String!): User
    logout: String
    uploadProfilePicture(id: ID!, profilePicture: Upload!): User
  }
`;
module.exports = userTypeDefs;