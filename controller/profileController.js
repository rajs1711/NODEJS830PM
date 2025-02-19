
const viewProfile = async (req, res) => {

    const data = [
        req.userinfo
    ]
    res.status(200).send({
        data,
        "success": true,
        "messge": "Your profile listed successfully"
    })

}

module.exports = {
    viewProfile
}
