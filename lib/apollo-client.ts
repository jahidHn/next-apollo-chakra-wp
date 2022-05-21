import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://hellojahid.pixencyc.com/graphql",
    cache: new InMemoryCache(),
});

export default client;