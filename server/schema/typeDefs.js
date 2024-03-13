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
    campaigns: [Campaigns]
}

type Campaign {
    _id: ID
    name: String
    npcs: [NPCS]
    bestiary: [Bestiary]
}

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
  actions: [Actions]
  bonuseActions: [BonusActions]
  reactions: [Reactions]
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


type Mutation {
        register(email: String!, username: String!, password: String!): User
        login(identifier: String!, password: String!): User
        logout: String
        uploadProfilePicture(id: ID!, profilePicture: Upload!): User
}
`

module.exports = typeDefs;