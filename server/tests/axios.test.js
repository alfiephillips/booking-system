const axios = require('axios');

axios.post('http://localhost:3000/auth/register', {
    fname: "Alfie",
    lname: "Phillips",
    email: "test@gmail.com",
    password: "password"
}).then((response) => {
    console.log(response.data);
});
