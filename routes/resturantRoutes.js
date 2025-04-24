const express = require("express")
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { createResturant, listAllResturants } = require('../controller/ResturantController')
const uploadHandler = require('../middleware/uploadcloudinary');
//import fileupload middleware 
const { createFood, listAllFoodsForResturant } = require('../controller/foodController');
const upload = require('../middleware/fileupload');
// Define our Routes authenticateJWT
router.post("/createresturant", createResturant);
router.get("/listallresturants", listAllResturants);
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
//authenticateJWT
router.post("/createfood", createFood);
// router.get("/listallfoods/:resturantid", listAllFoodsForResturant);
router.get("/listallfoods", listAllFoodsForResturant);


module.exports = router;