// Setup Express server
const express = require('express');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const apiprefix = process.env.APIPREFIX;
app.use(apiprefix, require("./routes/commonRoutes"));
app.use(apiprefix, require("./routes/loginRoutes"));


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Your express server sarted on port ${PORT}`)
})
