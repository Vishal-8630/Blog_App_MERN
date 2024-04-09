const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require('dotenv');

const app = express();

// Setup for dotenv file
dotenv.config();

// Middleware for setting cors
app.use(cors());

// Middleware for setting morgan -> used for logging format
app.use(morgan('dev'));

const port = process.env.PORT_NUMBER;
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});