import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer " + process.env.token,
    "Access-Control-Allow-Credentials" : "true"
  },
});

export default client;
