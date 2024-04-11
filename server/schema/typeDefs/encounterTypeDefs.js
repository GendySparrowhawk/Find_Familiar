// const { gql } = require("@apollo/server")
const gql = String.raw;
const { npcTypeDefs } = require("./npcTypedefs");
const { monsterTypeDefs } = require("./monsterTypeDefs");

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

module.exports = { ecnounterTypeDefs };
