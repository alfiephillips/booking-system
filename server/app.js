const express = require('express');
const cors = require('cors')
const mssql = require('mssql');
const morgan = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv').config;
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
        res.json({"status": "ok"})
})

app.listen(3000, () => {
    console.log(chalk.green("Server is starting!"))
})