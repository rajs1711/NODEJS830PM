// Setup Express server
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const { globalErrors } = require('./helpers/errorHandlers');
const connectdb = require('./config/db');
const rateLimit = require('express-rate-limit');

dotenv.config();
app.use(express.json());
//database connection
connectdb();
const apiprefix = process.env.APIPREFIX;
// API hit limitation
const limiter = rateLimit({
    windowMs: 2 * 60 * 1000, // 2 minutes
    limit: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
});

app.use(limiter);

app.use(apiprefix, require("./routes/commonRoutes"));
app.use(apiprefix, require("./routes/loginRoutes"));
app.use(apiprefix, require("./routes/profileRoutes"));
app.use(apiprefix, require("./routes/signupRoutes"));
app.use(apiprefix, require("./routes/resturantRoutes"));
app.use(apiprefix, require("./routes/logRoutes"));
app.use(globalErrors);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Your express server sarted on port ${PORT}`)
})
