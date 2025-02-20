const resturantModel = require('../model/resturantModel');
const createResturant = async (req, res) => {

    const {
        title,
        state,
        city,
        openTime,
        closeTime,
        rating,
        cusine,
        isActive
    } = req.body
    const newResturant = new resturantModel({
        title: title,
        state: state,
        city: city,
        openTime: openTime,
        closeTime: closeTime,
        rating: rating,
        cusine: cusine,
        isActive: isActive
    })

    const result = await newResturant.save();
    res.status(200).send({
        result,
        "success": true,
        "messge": " Resturant detail save successfully"
    })

}

module.exports = {
    createResturant
}
