const express = require("express")
const router = express.Router();

// Define our Routes

router.get("/hearbeat", () => {
    console.log('This is Heartbeat Route');
});
router.get("/home", () => {
    console.log('This is Homepage Route');
})


module.exports = router;