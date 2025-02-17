// Setup Express server
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const { globalErrors } = require('./helpers/errorHandlers');
const connectdb = require('./config/db');
dotenv.config();
app.use(express.json());
//database connection
connectdb();
const apiprefix = process.env.APIPREFIX;

app.use(apiprefix, require("./routes/commonRoutes"));
app.use(apiprefix, require("./routes/loginRoutes"));
app.use(apiprefix, require("./routes/orderRoutes"));
app.use(apiprefix, require("./routes/signupRoutes"));
app.use(globalErrors);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Your express server sarted on port ${PORT}`)
})
