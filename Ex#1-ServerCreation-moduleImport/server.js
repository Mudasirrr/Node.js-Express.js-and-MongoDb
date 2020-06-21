const getSum = require('./test');
const http = require('http');

// console.log(getSum);

http.createServer((req, res) => {
    res.write("Hello world");
    res.end();
}).listen(3000);
console.log("server is running in localhost:3000")