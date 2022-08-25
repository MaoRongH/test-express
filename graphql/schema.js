const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const path = require("path");

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "/**/*.graphql"))
);
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "/**/*.resolvers.js"))
);

module.exports = makeExecutableSchema({ typeDefs, resolvers });
