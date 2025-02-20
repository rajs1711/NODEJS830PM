const mongoose = require("mongoose");

//schema 
const resturantSchema = new mongoose.Schema({
    resturantid: String,
    title: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    openTime: {
        type: String
    },
    closeTime: {
        type: String
    },
    rating: {
        type: Number,
        default: 1,
        min: 1,
        max: 5
    },
    cusine: {
        type: Array
    },
    isActive: {
        type: Boolean
    },
    logoUrl: {
        type: String
    },
    coverImage: {
        type: String
    }
}, { timestamps: true });
//export
module.exports = mongoose.model("Resturant", resturantSchema);