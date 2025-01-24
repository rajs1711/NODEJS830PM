const loginController = async (req, res) => {

    try {
        console.log(req.body, '=========');
        const data = req.body;
        console.log(data);
        // logic to verify username and password is correct or not
        res.status(200).send({
            success: true,
            message: "userloggedin successfully",
            data
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: true,
            message: "Something went wrong"
        })
    }
}

module.exports = {
    loginController
}