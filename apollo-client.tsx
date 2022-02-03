import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache: new InMemoryCache(),
    headers:{
        "Authorization":"Bearer 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"
    }
});

export default client;