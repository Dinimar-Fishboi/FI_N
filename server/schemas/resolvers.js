const { AuthenticationError } = require('apollo-server-express');
const { User, Address} = require('../models');
const { signToken } = require('../utils/auth');
const { requestNBNTypeCheck} = require('../utils/api')

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('addresses');
          },
          user: async (parent, { username }) => {
            return User.findOne({ username }).populate('addresses');
          },
          address: async (parent, { addressId }, args) => {
            return Address.findOne({ _id: addressId });
          },
          searchAddress: async (parent, args, context) => {
            const addressObject = await requestNBNTypeCheck(args.address)        
            const address = await Address.create({
              userInput: args.address,
              streetName: addressObject.addressDetail.formattedAddress,
              techType: addressObject.addressDetail.techType,
              latitude: addressObject.addressDetail.latitude,
              longitude: addressObject.addressDetail.longitude
            });
              address.validate()
              console.log(address.streetName + " This should be printing streetname")
              console.log(address)
              
            await User.findByIdAndUpdate(
              { _id: context.user._id },
              {$addToSet: {addresses: address._id}}
            ) 
            // console.log(context)
            return address
          },
          me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('addresses');
            }
            throw new AuthenticationError('You need to be logged in!');
          },        
        
        },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        saveAddress: async (parent, args, context) => {
          // console.log(addressData)
          if (context.user){
            console.log(addressData)
            const addressObject = await requestNBNTypeCheck(searchAddress)
            console.log(addressObject)
            // console.log(status)
            const address = await Address.create({
              streetName: addressObject.addressDetail.formattedAddress,
              techType: addressObject.addressDetail.techType,
              latitude: addressObject.addressDetail.latitude,
              longitude: addressObject.addressDetail.longitude
            });
              console.log(address.streetName + " This should be printing streetname")
              // console.log(username)

            await User.findOneAndUpdate(
              { _id: context.user._id },
              {$addToSet: {addresses: address._id}}
            )
            console.log(address)
            return address

          }
          throw new AuthenticationError('You need to be logged in!');

        },
        removeAddress: async (parent, {addressId}, context) => {
              if (context.user) {
                const address = await Address.findOneAndDelete({
                  _id: addressId,
                })
                
                  await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { addresses: address._id } },
                  )

                  console.log("address has now been deleted")
                  return address;
              }
              throw new AuthenticationError('You need to be logged in!');
          }
    },

  }

module.exports = resolvers;
