const placeorderModel = require('../model/placeOrder');
const { mongoose } = require('mongoose');
const foodModel = require('../model/foodModel')
const placeorder = async (req, res) => {
    try {
        let resturant_id = '67d0567b49125e02e69ba0de';
        const {
            email,
            mobile,
            customer_name,
            code,
            coupancode,
            delivery_address
        } = req.body;

        const foods = await foodModel.find({ code: code });
        let orderamount;
        //Note: here you can call Coupan model and check given coupan 
        //is valid or not and find less amount
        if (coupancode === 'NEW100') {
            orderamount = foods[0].price - 100
        } else {
            orderamount = foods[0].price
        }
        const placeorder = new placeorderModel({
            resturantid: resturant_id,
            customer_name,
            email,
            mobile,
            code,
            orderamount,
            coupancode,
            status: 'In-Progress',
            delivery_address
        });
        const result = await placeorder.save();
        res.status(200).send({
            result,
            "success": true,
            "message": "order detail save successfully"

        });
    }
    catch (error) {
        console.error("error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: error.message
        });
    }
}
// get total order count for a  customer
/*const getordercount = async (req, res) => {
    try {
        const userid = req.body.useremail;
        if (!userid) {
            return res.status(400).json({ success: false, message: "userid is required" });
        }
        const ordercount = await placeorderModel.countDocuments({ userid });
        return res.status(200).json({ success: true, message: "order counted successfully", data: ordercount });

    }
    catch (error) {
        console.error("error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: error.message
        });
    }
}*/
//get all orders
const getallorders = async (req, res) => {
    try {
        const orders = await placeorderModel.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, message: "order history  received successfully", orders });
    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal server Error",
            error: error.message
        });
    }
}

module.exports = {
    placeorder, getallorders
}