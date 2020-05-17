const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const requestSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },

    acceptor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    accepted: {
        type: String,
        default: 'No'
    },

    finished: {
        type: String,
        default: 'No'
    },

    hosp_name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },

    first_name: {
        type: String,
        required: true,
        min: 2,
        max: 127
    },

    last_name: {
        type: String,
        required: true,
        min: 2,
        max: 127
    },

    age: {
        type: Number,
        required: true,
        min: 0
    },

    blood_type: {
        type: String,
        required: true,
        max: 3
    },

    date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Request', requestSchema);















