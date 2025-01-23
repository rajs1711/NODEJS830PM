const express = require("express")

const router = express.Router();

// Define our Routes

router.get("/createorder", () => {
    console.log('Logic to create order');

});
router.get("/vieweorder", () => {
    console.log('Logic to create order');
});
router.get("/cancelorder", () => {
    console.log('Logic to create order');
});
router.get("/orderhistory", () => {
    console.log('Logic to create order');
});



module.exports = router;