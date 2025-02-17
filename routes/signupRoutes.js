const express = require("express")
const { signupController } = require("../controller/signupController");
const { validate } = require("express-validation");
const { signupvalidate } = require("../validation");
const router = express.Router();

// Define our Routes

router.post("/signup", validate(signupvalidate.signupvalidation), signupController);


module.exports = router;