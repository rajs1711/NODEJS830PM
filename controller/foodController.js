const foodModel = require('../model/foodModel')

const createFood = async (req, res) => {
    const {
        resturantid,
        name,
        imageurl,
        price,
        category,
        rating
    } = req.body;

    const newFood = new foodModel({
        resturantid,
        name,
        imageurl,
        price,
        category,
        rating
    });

    const result = await newFood.save();
    res.status(200).send({
        result,
        success: true,
        message: "Food item created successfully"
    });
};



const listAllFoodsForResturant = async (req, res) => {
    //const { resturantid } = req.params;
    //const foods = await foodModel.find({ resturantid });
    const foods = await foodModel.find();
    res.status(200).send({
        foods,
        success: true,
        message: "Foods listed successfully"
    });
};

module.exports = {
    createFood,
    listAllFoodsForResturant
};