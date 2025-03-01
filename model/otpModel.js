const mongoose = require('mongoose');

// schema  design 

const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    isValid: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

// Export our schema
module.exports = mongoose.model("userotp", OTPSchema);
