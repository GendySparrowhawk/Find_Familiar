const { gql } = require("@apollo/server")
const npcTypeDefs = require("./npcTypedefs");
const monsterTypeDefs = require("./");

const ecnounterTypeDefs = gql`
  type Encounter {
    _id: ID
    name: String
    npcs: [NPCS]
    monsters: [Monster]
  }

  type Query {
    getEncountersByCampaign(campaignId: ID!):Encounter
  }

  type Mutation {
    createEncounter(
        id: ID
        name: String
        npcs:[NPCS]
        monsters: [Monster]
    )
  }
`;

module.exports = ecnounterTypeDefs;
