const express = require("express")

const router = express.Router();

// Define our Routes

router.get("/login", () => {
    console.log('This is Login Route');
});


module.exports = router;