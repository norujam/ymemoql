import {
    GraphQLServer
} from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import {
    startDB,
    models
} from './graphql/db';

const db = startDB({
    user: "gql",
    pwd: "gql",
    db: "gql",
    url: "localhost:27018"
});

const context = {
    models,
    db
};

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers,
    context
});

server.start(() => console.log("Graphql Server Running"));