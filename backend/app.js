const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(cors());
app.use(morgan('dev'));

const port = process.env.PORT_NUMBER;
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});