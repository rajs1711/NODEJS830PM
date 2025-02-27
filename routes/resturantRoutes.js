const express = require("express")
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { createResturant } = require('../controller/ResturantController')
const uploadHandler = require('../middleware/uploadcloudinary');
//import fileupload middleware 

const upload = require('../middleware/fileupload');
// Define our Routes
router.post("/createresturant", authenticateJWT, createResturant);
// Single File upload
router.post("/uploadcover", upload.single('file'), (req, res) => {
    res.json({ message: 'File upload successfully' })
});
//Mutiple File upload
router.post("/uploadgallery", upload.array('galleryimages'), (req, res) => {
    res.json({ message: 'File upload successfully' })
});

// mutiple fields with fileupload
router.post("/uploaddocs", upload.fields([
    {
        name: 'aadhar', maxCount: 1
    },
    {
        name: 'pan', maxCount: 1
    }

]), (req, res) => {
    res.json({ message: 'File upload successfully' })
});



module.exports = router;