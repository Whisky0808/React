import { gql } from "@apollo/client";
import { COUNTRY_BASIC } from "../fragments/countryBasic";

export const GET_COUNTRIES_BY_CONTINENT = gql`
  ${COUNTRY_BASIC}
  query CountriesByContinent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        ...CountryBasic
        isFavorite @client
      }
    }
  }
`;
