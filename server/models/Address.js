const {Schema, model} = require('mongoose');

const addressSchema = new Schema ({
    userInput: {
        type: String,
        unique: false,
    },
    streetName: {
        type: String,
        default: null,
        unique: false,
    },
    techType: {
        type: String,
        unique: false,
    },
    latitude: {
        type: String,
        unique: false,
    },
    longitude: {
        type: String,
        unique: false,
    }
})

    const Address = model('Address', addressSchema);

    module.exports = Address;