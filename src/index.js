import { ApolloServer } from "apollo-server";

import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";
import NewAPI from "./data-sources/hacker-news-api.js";


const PORT = process.env.PORT || 4000;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    newAPI :  new NewAPI,
  }),
});

server.listen(PORT).then(() => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
});
