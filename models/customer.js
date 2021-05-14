let mongoose = require('mongoose');

let customerSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('Customer', customerSchema);