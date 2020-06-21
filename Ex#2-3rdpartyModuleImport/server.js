const getSum = require('./test');
// const http = require('http');
const express = require('express'); //3rd party module npm i express


const app = express();
/**
 * Note: whatever statement we use with app we called them middleware..
 */


app.get('/', (req, res, next) => {
    res.send("Hello world.....");

    next(); //pass to next layer middleware
});

const port = 5000;

app.listen(port, () => {
    console.log("server is running in localhost:5000")

})