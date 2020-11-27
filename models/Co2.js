const mongoose = require('mongoose');

const Co2Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ppm: {
        type: Number,
        required: true,
        validate: {
            validator : Number.isInteger,
            message   : '{VALUE} is not an integer value'
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Co2', Co2Schema);