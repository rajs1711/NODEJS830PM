const multer = require('multer');
const cloudinary = require('../config/cloudinaryconfig');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // temporray storage
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname) // temp filename
    }
});


//Allowed mimetypes
const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];

//setup multer config validation 
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb file size
    },
    fileFilter: (req, file, cb) => {
        if (!allowedTypes.includes(file.mimetype)) {
            return cb(new Error('Invalid file Type , Allowed type jpg,jpeg,png'))
        }
        cb(null, true); // if file type is valid then continue execution

    }
}).single('profileimage');

// middleware function tp upload images on cloudinary

const uploadHandler = (req, res, next) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            if (err.code == 'LIMIT_FILE_SIZE') {
                return res.status(400).json({
                    msg: "File size exceed 5MB"
                })
            }
            return res.status(500).json({
                msg: "Multer Error"
            });
        } else if (err) {
            return res.status(500).json({
                msg: "Unknown type of  Error"
            });
        } else {
            try {
                const filePath = path.join('uploads/', req.file.originalname); // create path of our file
                const result = await cloudinary.uploader.upload(filePath); // to upload to cloudinary
                fs.unlinkSync(filePath);// to delete from our locak storage
                // Attach the cloudinary url to our req object for next use 
                req.profileImageUrl = result.secure_url;
                next();  // call next function routes
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    msg: "Cloudinary Error"
                })
            }
        }

    })
}

module.exports = uploadHandler