// Imports

const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();

// Configuration

dotenv.config({path: '.env'});
const PORT = process.env.PORT;

// Middleware
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/schools', require('./routes/schools'));

// Listening for requests

app.listen(PORT, () => {
    console.log(`Server starting on http://localhost:${PORT}`);
})