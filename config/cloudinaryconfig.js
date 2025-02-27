const cloudinary = require('cloudinary').v2;

// Configuration
cloudinary.config({
    cloud_name: 'ddgin9n9p',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary