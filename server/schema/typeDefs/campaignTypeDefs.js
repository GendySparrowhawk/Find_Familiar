const { gql } = require("@apollo/server");
const { npcTypeDefs } = require("./npcTypedefs");
const { ecnounterTypeDefs } = require("./encounterTypeDefs");

const campaignTypeDefs = gql`
  type Campaign {
    _id: ID
    name: String
    npcs: [NPCS]
    encounters: [Encounter]
  }
`;

module.exports = campaignTypeDefs;
