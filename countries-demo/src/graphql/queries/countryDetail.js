import { gql } from "@apollo/client";
import { COUNTRY_BASIC } from "../fragments/countryBasic";

export const GET_COUNTRY_DETAIL = gql`
  ${COUNTRY_BASIC}
  query CountryDetail($code: ID!) {
    country(code: $code) {
      ...CountryBasic
      capital
      currency
      phone
      continent { name }
      languages { name }
      isFavorite @client
    }
  }
`;
