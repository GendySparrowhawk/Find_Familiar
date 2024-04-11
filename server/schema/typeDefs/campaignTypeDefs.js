// const { gql } = require("@apollo/server");
const gql = String.raw;
const { npcTypeDefs } = require("./npcTypedefs.js");
const { ecnounterTypeDefs } = require("./encounterTypeDefs");

const campaignTypeDefs = gql`
  type Campaign {
    _id: ID
    name: String
    npcs: [NPCS]
    encounters: [Encounter]
  }
`;

module.exports = { campaignTypeDefs };
