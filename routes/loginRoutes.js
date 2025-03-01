const express = require("express")
const { loginController, sendotp } = require("../controller/loginController")
const { validate } = require("express-validation");
const { loginvalidate } = require("../validation");
const router = express.Router();

// Define our Routes

router.post("/login", validate(loginvalidate.loginvalidation), loginController);
router.post("/loginwithotp", validate(loginvalidate.loginvalidation_v2), sendotp);



module.exports = router;