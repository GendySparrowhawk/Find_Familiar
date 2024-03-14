const gql = String.raw;

const typeDefs = gql`
scalar Upload

type User {
    _id: ID
    email: String
    username: String
    profilePicture: String
    createdAt: String
    updatedAt: String
    campaigns: [Campaign]
}

type Campaign {
    _id: ID
    name: String
    npcs: [NPCS]
    bestiary: [Bestiary]
}

# npc typedefs
type NPCS {
    _id: ID
    name: String
    race: String
    class: String
    level: Int
    skills:[Skill]
    status: NPCStatus
  modifiers: NPCModifiers
  abilities: NPCAbilities
  spells: [spellData]
  spellKnown: String
  actions: [Action]
  bonuseActions: [BonusAction]
  reactions: [Reaction]
}

type Skill {
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

type NPCModifiers{
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
}

type NPCAbilities{
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
}

type SpellData {
    lvl: String
    amount: Int
}

type Action {
    name: String
    description: String
}

type BonusAction {
    name: String
    description: String
}

type Reaction {
    name: String
    description: String
}


# bestiary typedefs
type Bestiary {
    monsters: [Monster]
}

type Monster {
    _id: ID
    name: String
    cr: Int
    skills:[Skill]
    stats: MonsterStats
  modifiers: MonsterModifiers
  abilities: MonsterAbilities
  attacks: [Attack]
  actions: [Action]
  bonuseActions: [BonusAction]
  reactions: [Reaction]
}

# monster typedefs
type MonsterStats {
    hp: Int
    ac: Int
    initiative: Int
    speed: String
    hitDice: String
}

type MonsterModifiers {
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
}

type MonsterAbilities {
    str: Int
    dex: Int
    con: Int
    int: Int
    wis: Int
    cha: Int
}

type Attack {
    name: String
    toHit: Int
    damage: String
}

type Mutation {
        register(email: String!, username: String!, password: String!): User
        login(identifier: String!, password: String!): User
        logout: String
        uploadProfilePicture(id: ID!, profilePicture: Upload!): User
}
`;

module.exports = typeDefs;
