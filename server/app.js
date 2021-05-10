// Imports

const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


const app = express();

// Configuration

dotenv.config({path: '.env'});
const PORT = process.env.PORT;


// Middleware

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Passport Middleware

app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/schools', require('./routes/schools'));

// Listening for requests

app.listen(PORT, () => {
    console.log(`Server starting on http://localhost:${PORT}`);
})