import { gql } from "@apollo/client";

export const COUNTRY_BASIC = gql`
  fragment CountryBasic on Country {
    code
    name
    emoji
  }
`;
