const mongoose = require('mongoose');

// schema  design 

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String

    }
},
    {
        timestamps: true
    }
);

// Export our schema
module.exports = mongoose.model("Signups", signupSchema);
