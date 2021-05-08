const axios = require('axios');

// let res = axios.post('http://localhost:3000/auth/login', {form:{fname: "Alfie", lname: "Phillips", email:'leowildman28@gmail.com', password:'lol'}});

// let res = axios.post('http://localhost:3000/auth/register', {form:{fname: "Alfie", lname: "Phillips", email: "thealfiephillips@gmail.com", password: "testpasswordlol", cpassword: "testpasswordlol"}});
// console.log(res.data);

axios.post('http://localhost:3000/auth/login', {
    fname: "Alfie",
    lname: "Phillips",
    email: "thealfiephillips@gmail.com",
    password: "thepasswordlol",
}).then((response) => {
    console.log(response.data)
}).catch((error) => {
    console.log(error);
})

// axios.post('http://localhost:3000/auth/register', {
//     fname: "Alfie",
//     lname: "Phillips",
//     email: "thealfiephillips@gmail.com",
//     password: "thepasswordlol",
//     cpassword: "thepasswordlol"
// }).then((response) => {
//     console.log(response.data)
// }).catch((error) => {
//     console.log(error);
// })