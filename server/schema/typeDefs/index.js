// const { gql } = require("@apollo/server");
const gql = String.raw;
const { userTypeDefs } = require("./userTypeDefs");
const { npcTypeDefs } = require("./npcTypedefs.js");
const { campaignTypeDefs } = require("./campaignTypeDefs");
const { ecnounterTypeDefs } = require("./encounterTypeDefs");
const { monsterTypeDefs } = require("./monsterTypeDefs");
const { bestiaryTypeDefs } = require("./bestiaryTypeDefs");

const typeDefs = gql`
  ${userTypeDefs}
  ${campaignTypeDefs}
  # ${ecnounterTypeDefs}
  # ${npcTypeDefs}
  # ${monsterTypeDefs}
  # ${bestiaryTypeDefs}
`;

module.exports = typeDefs;
