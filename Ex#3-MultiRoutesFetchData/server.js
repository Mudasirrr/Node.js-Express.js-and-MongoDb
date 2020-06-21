const getSum = require('./test');
// const http = require('http');
const express = require('express'); //3rd party module npm i express


const app = express();

app.get('/', (req, res) => {
    res.send("Hello world.....")
});

app.get('/hi', (req, res) => {
    res.send("Hi Mudasir How are you.....")
});

app.get('/address', (req, res) => {
    res.send("Taxila street no.29....")
});

const port = 5000;

app.listen(port, () => {
    console.log("server is running in localhost:5000")

})