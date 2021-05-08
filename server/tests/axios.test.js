const axios = require('axios');
const request = require('request');

request.post('http://localhost:3001/auth/login', {form:{email:'leowildman28@gmail.com', password:'lol'}})
