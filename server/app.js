// Imports

const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');


const app = express();

// Configuration

dotenv.config({path: '.env'});
const PORT = process.env.PORT;

// Middleware

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

// Routes

app.use('/', require('./routes/index'));
app.use('/bookings', require('./routes/bookings'));


// Listening for requests

app.listen(PORT, () => {
    console.log(`Server starting on http://localhost:${PORT}`);
})