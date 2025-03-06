const express = require("express")
const { logController } = require("../controller/logController");
const { authenticateJWT } = require('../middleware/authentication');
const router = express.Router();

// Define our Routes

router.post("/logs", authenticateJWT, logController);


module.exports = router;