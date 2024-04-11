const { GraphQLScalarType } = require("graphql");

const modifer_resolvers = {
  AbilityScore: new GraphQLScalarType({
    name: "Ability Score",
    description: "atuo math for modifiers",
    parseValue(value) {
      return value;
    },
    serialize(value) {
      return value;
    },
    parseLiteral(ast) {
      return ast.value;
    },
  }),
  Ability: {
    modifier: (parent) => {
      const score = parent.score;
      if (score >= 1 && score <= 1) return -5;
      if (score >= 2 && score <= 3) return -4;
      if (score >= 4 && score <= 5) return -3;
      if (score >= 6 && score <= 7) return -2;
      if (score >= 8 && score <= 9) return -1;
      if (score >= 10 && score <= 11) return 0;
      if (score >= 12 && score <= 13) return 1;
      if (score >= 14 && score <= 15) return 2;
      if (score >= 16 && score <= 17) return 3;
      if (score >= 18 && score <= 19) return 4;
      if (score >= 20 && score <= 21) return 5;
      if (score >= 22 && score <= 23) return 6;
      if (score >= 24 && score <= 25) return 7;
      return 0;
    },
  },
};

module.exports = modifer_resolvers;