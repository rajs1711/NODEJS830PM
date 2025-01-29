const express = require("express")
const { loginController } = require("../controller/loginController")
const { validate } = require("express-validation");
const { loginvalidate } = require("../validation");
const router = express.Router();

// Define our Routes

router.post("/login", validate(loginvalidate.loginvalidation), loginController);



module.exports = router;