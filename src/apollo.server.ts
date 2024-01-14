import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './graphql/resolvers/resolvers'
import { graphqlTypes } from './graphql/types/deftypes'

const apolloServer = new ApolloServer({
    typeDefs: graphqlTypes,
    resolvers
});

export default apolloServer;