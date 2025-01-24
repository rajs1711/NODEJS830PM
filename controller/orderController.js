
const orderController = async (req, res) => {
    res.status(200).send({
        "success": true,
        "messge": "Your Order created successfully"
    })

}

module.exports = {
    orderController
}