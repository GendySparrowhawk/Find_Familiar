// const { gql } = require("@apollo/server");
const gql = String.raw;
const { monsterTypeDefs } = require("./monsterTypeDefs");
const bestiaryTypeDefs = gql`
  type Bestiary {
    _id: ID
    name: String
    monsters: [Monster]
  }
`;

module.exports = { bestiaryTypeDefs };
