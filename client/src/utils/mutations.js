import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const SAVE_ADDRESS = gql`
mutation saveAddress($searchAddress: String!, $addressData: AddressInput!){
    saveAddress(searchAddress: $searchAddress, addressData: $addressData){
        addressId
        streetName
        techType
        latitude
        longitude
    }
}
`;

export const REMOVE_ADDRESS = gql`
mutation removeAddress($id: ID!){
    removeAddress(addressId: $id){
        addressId
        streetName
        techType
        latitude
        longitude
    }
}
`;