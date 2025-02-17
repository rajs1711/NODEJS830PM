const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const con = await mongoose.connect('mongodb://localhost:27017/nodejs830pm');
        if (con) {
            console.log(`conenction successfull ${con.connection.host}on Db ${mongoose.connection.name}`);
        }
    } catch (error) {
        console.log(`DB ERROR===`, error.message);
    }
};

module.exports = connectdb;
