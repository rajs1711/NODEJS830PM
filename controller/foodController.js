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
    let code = name.toLowerCase().replace(/\s+/g, '');
    const newFood = new foodModel({
        resturantid,
        name,
        imageurl,
        price,
        category,
        rating,
        code
    });

    const result = await newFood.save();
    res.status(200).send({
        result,
        success: true,
        message: "Food item created successfully"
    });
};



const listAllFoodsForResturant = async (req, res) => {
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