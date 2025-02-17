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
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
);

// Export our schema
module.exports = mongoose.model("Signups", signupSchema);
