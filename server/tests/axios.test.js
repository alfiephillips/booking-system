const axios = require('axios');

axios.post('http://localhost:3000/auth/login', {
    email: "thealfiephillip@gmail.com",
    password: "password123",
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error);
})

// axios.post('http://localhost:3000/auth/register', {
//     fname: "Alfie",
//     lname: "Phillips",
//     email: "thealfiephillip@gmail.com",
//     password: "password123",
//     cpassword: "password123"
// }).then((response) => {
//     console.log(response.data)
// }).catch((error) => {
//     console.log(error);
// })