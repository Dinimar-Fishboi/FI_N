const {gql} = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        addresses: [Address]
    }

    type Address {
        _id: ID
        userInput: String
        streetName: String
        techType: String
        latitude: String
        longitude: String
    }

    input AddressInput {
        _id: ID
        streetName: String
        userInput: String
        techType: String
        latitude: String
        longitude: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type SearchAddressResult {
        userInput: String
        streetName: String
        techType: String
        latitude: String
        longitude: String
    }

    type Query {
        searchAddress(address: String!): SearchAddressResult
        me: User
        users: [User]!
        user(username: String!): User
        address( addressId: ID!): Address

    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveAddress( searchAddress: String!, addressData: AddressInput!): Address
        removeAddress (addressId: ID!): Address

    }
`;

// removeAddress (addressId: ID!): Address

module.exports = typeDefs;
