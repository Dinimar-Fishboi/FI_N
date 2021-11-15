import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      addresses {
        _id
        userInput
        streetName
        techType
        latitude
        longitude
      }
    }
  }
`;

export const QUERY_USER = gql`
query user($username: String!){
    user(username: $username){
      _id
      username
      email
      password
      addresses {
        streetName
      }
    }
  }
`

export const SEARCH_ADDRESS = gql`
    query searchAddress($address: String!) {
        searchAddress(address: $address){
        userInput
        streetName
        techType
        latitude
        longitude
        }
    }
    `

export const QUERY_ADDRESS = gql`
    query address($addressId: ID!){
        address(addressId: $addressId){
        _id
        userInput
        streetName
        techType
        latitude
        longitude
        }
    }
`