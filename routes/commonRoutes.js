const express = require("express")
const router = express.Router();

// Define our Routes

router.get("/heartbeat", (req, res) => {
    res.send('Heartbeat');
});
router.get("/home", () => {
    console.log('This is Homepage Route');
})


module.exports = router;