const mongoose = require('mongoose');

const LiveSchema = mongoose.Schema({
    _id: {
        type: String,
        required:true
    },
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

module.exports = mongoose.model('Live', LiveSchema);