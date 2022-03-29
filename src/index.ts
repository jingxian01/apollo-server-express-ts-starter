import express from "express";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import "dotenv/config";
import { buildSchema } from "type-graphql";
import { ExampleResolver } from "./resolver";

async function main() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [ExampleResolver],
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(process.env.PORT, () => {
    console.log(`server is up and running on port ${process.env.PORT}`);
    console.log(`url: http://localhost:${process.env.PORT}/graphql`);
  });
}

main();
