import { GraphQLServer } from 'graphql-yoga';
import path from 'path';

import resolvers from './resolvers';

import './database';

const server: GraphQLServer = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers,
});

server.start().then(() => console.log('server running'));
