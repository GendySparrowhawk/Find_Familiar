// const { gql } = require('@apollo/server');
const gql = String.raw;
const { campaignTypeDefs } = require('./campaignTypeDefs');
const { bestiaryTypeDefs } = require('./bestiaryTypeDefs');

const userTypeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    profilePicture: String
    createdAt: String
    updatedAt: String
    campaigns: [Campaign]
    # bestiary: [Bestiary]
  }

  type Query {
    getUserById(userId: ID!): User
    authenticate: User
  }

  type Mutation {
    register(email: String!, username: String!, password: String!): User
    login(identifier: String!, password: String!): User
    logout: String
  }
`;
module.exports = { userTypeDefs };