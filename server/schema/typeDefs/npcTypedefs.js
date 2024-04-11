const { gql } = require("@apollo/server");

const npcTypeDefs = gql`
  scalar AbilityScore

  type NPCS {
    _id: ID
    name: String
    race: String
    class: String
    level: Int
    skills: [Skill]
    status: NPCStatus
    abilities: [NPCAbility]
    attacks: [Attack]
    spells: [Spell]
    spellKnown: [SpellSlots]
    spellDc:Int
    actions: [Action]
    bonuseActions: [BonusAction]
    reactions: [Reaction]
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

  type NPCStatus {
    hp: Int
    ac: Int
    initiative: Int
    speed: String
    hitDice: String
  }

  type NPCStatusInput {
    hp: Int
    ac: Int
    initiative: Int
    speed: String
    hitDice: String
  }

  type NPCAbility {
    name: String
    score: AbilityScore
    modifier: Int
  }

  input NPCAbilityInput {
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

  type AttackInput {
    name: String
    range: String
    toHit: String
    damage: String
    damageType: String
  }

  enum SpellComponent {
    S
    V
    M
  }

  type Spell {
    name: String
    lvl: Int
    school: String
    range: String
    castingTime: String
    duration: String
    concentration: Boolean
    ritual: Boolean
    saveThrow: String
    damageType: String
    components: [SpellComponent]
    materials: String
    description: String
  }

  input SpellInput {
    name: String
    lvl: Int
    school: String
    range: String
    castingTime: String
    duration: String
    concentration: Boolean
    ritual: Boolean
    saveThrow: String
    damageType: String
    components: [SpellComponent]
    materials: String
    description: String
  }

  type spellSlots {
    lvl: Int
    amount: Int
  }

  input spellSlots {
    lvl: Int
    amount: Int
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

  type Mutation {
    createNPC(
        id: ID
      name: String!
      race: String!
      class: String!
      level: Int!
      skills: [SkillInput]!
      status: NPCStatusInput!
      abilities: NPCAbilityInput!
      attacks: [AttackInput]
      spells: [SpellInput]
      spellKnown: [SpellSlotsInput]
      spellDc: Int
      actions: [ActionInput]
      bonuseActions: [BonusActionInput]
      reactions: [ReactionInput]
    ): NPCS
  }
`;
