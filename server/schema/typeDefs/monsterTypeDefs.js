// const { gql } = require("@apollo/server");
const gql = String.raw;

const monsterTypeDefs = gql`
  scalar AbilityScore
  type Monster {
    _id: ID
    name: String
    cr: Int
    skills: [Skill]
    status: MonsterStatus
    abilities: MonsterAbility
    attacks: [Attack]
    actions: [Action]
    bonuseActions: [BonusAction]
    reactions: [Reaction]
    legendaryActions: [LegendaryActions]
    lairActions: [LairActions]
  }

  type Skill {
    name: String
    value: Int
    isProf: Boolean
  }

  input SkillInput {
    name: String
    value: Int
    isProf: Boolean
  }

  type MonsterStatus {
    hp: Int
    ac: Int
    initiative: Int
    speed: String
    hitDice: String
  }

  input MonsterStatusInput {
    hp: Int
    ac: Int
    initiative: Int
    speed: String
    hitDice: String
  }

  type MonsterAbility {
    name: String
    score: AbilityScore
    modifier: Int
  }

  input MonsterAbilityInput {
    name: String
    score: AbilityScore
    modifier: Int
  }

  type AbilityScore {
    score: Int
    modifier: Int
  }

  type Attack {
    name: String
    range: String
    toHit: String
    damage: String
    damageType: String
  }

  input AttackInput {
    name: String
    range: String
    toHit: String
    damage: String
    damageType: String
  }
  type Action {
    name: String
    description: String
  }

  input ActionInput {
    name: String
    description: String
  }

  type BonusAction {
    name: String
    description: String
  }

  input BonusActionInput {
    name: String
    description: String
  }

  type Reaction {
    name: String
    description: String
  }

  input ReactionInput {
    name: String
    description: String
  }

  type LegendaryAction {
    name: String
    description: String
  }

  input LegendaryActionInput {
    name: String
    description: String
  }

  type LairActions {
    name: String
    description: String
  }

  input LairActionsInput {
    name: String
    description: String
  }
`;

module.exports = { monsterTypeDefs };
