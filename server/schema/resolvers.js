const user_resolvers = require('./lib/user_resolvers');
const modifier_resolvers = require('./lib/modifer_resolvers')



const resolvers = {
    Query: {
        ...user_resolvers.Query,
        ...modifier_resolvers.Query,
    },
    Mutation: {
        ...user_resolvers.Mutation,
        ...modifier_resolvers.Mutation,
    }
}


module.exports = resolvers;