const express = require('express'); //3rd party module npm i express
const Home = require('./routes/api/Home');
const About = require('./routes/api/About');

const app = express();

//Serving Static File
app.use(express.static('public'));


// Use Routes
app.use('/api/Home', Home);
app.use('/api/About', About);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    next(); //Pass to next layer of middleware
});


const port = 5000;

app.listen(port, () => {
    console.log("server is running in localhost:5000")

})