const mongoose = require('mongoose');

const urlSchem = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistroy: [
        {
            timestamp: { type: Number }
        }
    ]
}, { timestamps: true }
);

const URLSchema = mongoose.model('url', urlSchem);

module.exports = URLSchema;
