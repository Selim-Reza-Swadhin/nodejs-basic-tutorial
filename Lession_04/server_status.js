const http = require('http');
//console.log(http);



//separate port, hostname
//create server for nodejs
const port = 3000;
//const hostname = '127.0.0.1';
const hostname = 'localhost';
const myServer = http.createServer((req, res) => {
    //res.statusCode = 203;
    //res.writeHead(202, { 'Content-Type': 'text/plain' });//only text
    //res.write("hello");
    //res.write("<h1>Hello</h1>");
    res.writeHead(202, { 'Content-Type': 'text/html' }); //html text
    res.write("<h1 style='color:green'>Hello</h1>");
    res.write("<h2>Hello</h2>");
    res.write("<h3>Hello</h3>");
    res.write("<p style='color:red'>Hello</p>");
    res.end();
});

//use port and hostname
myServer.listen(port, hostname, () => {
    console.log(`server is running successfully at http://${hostname}:${port}`); //use backtrick
});