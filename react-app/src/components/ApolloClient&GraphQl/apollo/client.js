
import { ApolloClient, InMemoryCache, ApolloProvider, makeVar } from "@apollo/client";
export const favoriteVar = makeVar([]); 

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache({
    typePolicies: {
      Country: {
        fields: {
          isFavorite: {
            read(_, { readField }) {
              const code = readField("code");
              return favoriteVar().includes(code);
            }
          }
        }
      }
    }
  })
});
export default client;