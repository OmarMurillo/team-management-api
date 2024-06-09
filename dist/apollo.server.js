"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const resolvers_1 = require("./graphql/resolvers/resolvers");
const deftypes_1 = require("./graphql/types/deftypes");
const apolloServer = new apollo_server_express_1.ApolloServer({
    typeDefs: deftypes_1.graphqlTypes,
    resolvers: resolvers_1.resolvers
});
exports.default = apolloServer;
