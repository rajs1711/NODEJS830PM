const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    resturantid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    imageurl: String,
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['veg', 'nonveg'],
        required: true
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
    code: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Food", foodSchema);