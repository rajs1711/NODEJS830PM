const express = require("express")

const router = express.Router();

const { orderController } = require('../controller/orderController')

// Define our Routes

router.post("/createorder", orderController);
router.get("/vieweorder", () => {
    console.log('Logic to create order');
});
router.patch("/cancelorder", () => {
    console.log('Logic to create order');
});
router.get("/orderhistory", () => {
    console.log('Logic to create order');
});
router.put("/updateorder", () => {
    console.log('Logic to create order');
});



module.exports = router;