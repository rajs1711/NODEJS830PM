const resturantModel = require('../model/resturantModel');
const { setRedisDataByKey, getRedisDataByKey } = require('../middleware/redis');
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
const listAllResturants = async (req, res) => {
    let resturants, resturants_list;
    resturants_list = await getRedisDataByKey('resturantlist');
    if (resturants_list) { // when data is in redis
        console.log('comes from redis');
        resturants = resturants_list
    } else {
        // when data not in redis
        console.log('comes from database');
        resturants = await resturantModel.find(); // mongodb call
        await setRedisDataByKey('resturantlist', resturants) // set data in redis
    }

    res.status(200).send({
        resturants,
        success: true,
        message: "Resturants listed successfully"
    });
}
module.exports = {
    createResturant, listAllResturants
}
