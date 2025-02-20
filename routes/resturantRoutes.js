const express = require("express")
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { createResturant } = require('../controller/ResturantController')

// Define our Routes

router.post("/createresturant", authenticateJWT, createResturant);




module.exports = router;