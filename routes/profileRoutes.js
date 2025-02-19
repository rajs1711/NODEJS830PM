const express = require("express")
const router = express.Router();
const { authenticateJWT } = require('../middleware/authentication');
const { viewProfile } = require('../controller/profileController')

// Define our Routes

router.get("/viewprofile", authenticateJWT, viewProfile);




module.exports = router;