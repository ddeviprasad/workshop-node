const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: Object,
    },
    watched: {
        type: Boolean,
        default: false
    }
});

module.exports = { Movie };