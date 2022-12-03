const express = require('express');

const bodyParser = require('body-parser');

const dotenv = require('dotenv');

const app = express();

app.use(bodyParser.json());

const connectDB = require('./config/db');

dotenv.config({ path : './config/config.env' });

connectDB();

//routes

app.use('/', require('./routes/index'));




app.listen(3000);
