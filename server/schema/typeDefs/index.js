const { gql } = require('@apollo/server');
const userTypeDefs = require('./userTypeDefs');
const npcTypeDefs = require('./npcTypedefs');
const campaignTypeDefs = require('./campaignTypeDefs');
const ecnounterTypeDefs = require('./encounterTypeDefs');

const typeDefs = gql`
  scalar Upload
  ${userTypeDefs}
  ${campaignTypeDefs}
  ${ecnounterTypeDefs}
  ${npcTypeDefs}
  

  # bestiary typedefs
  type Bestiary {
    monsters: [Monster]
  }

  type Monster {
    _id: ID
    name: String
    cr: Int
    skills: [SkillInput]
    stats: MonsterStatsInput
    modifiers: MonsterModifiersInput
    abilities: MonsterAbilitiesInput
    attacks: [AttackInput]
    actions: [ActionInput]
    bonuseActions: [BonusActionInput]
    reactions: [ReactionInput]
  }

  # monster typedefs
  input MonsterStatsInput {
    hp: Int
    ac: Int
    initiative: Int
    speed: String
    hitDice: String
  }

  input MonsterModifiersInput {
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
  }

  input MonsterAbilitiesInput {
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
  }

  input AttackInput {
    name: String
    toHit: Int
    damage: String
    damageType: String
  }
`;

module.exports = typeDefs;
