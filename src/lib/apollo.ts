import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4olk42h0ml201w798px3md3/master',
  cache: new InMemoryCache()
})