const mongoose = require('mongoose');
const placeorderSchema = new mongoose.Schema({
    resturantid: {
        type: String,
        required: true
        // unique:true
    },
    customer_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        // required:true
    },
    orderamount: {
        type: Number,
        required: true
    },
    coupancode: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    delivery_address: {
        type: String,
        required: true
    }

},

    {
        timestamps: true
    }

);
module.exports = mongoose.model('placeorder', placeorderSchema);