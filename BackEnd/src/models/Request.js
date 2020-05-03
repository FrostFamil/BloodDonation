const mongoose = require('mongoose');


const requestSchema = new mongoose.Schema({
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















