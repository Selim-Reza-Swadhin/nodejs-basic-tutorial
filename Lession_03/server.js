const http = require('http');
//console.log(http);

//create server for nodejs
// http.createServer((req, res) => {
//     res.end("Hello, I am your first server");
// }).listen(3000);

//create server for nodejs
// const myServer = http.createServer((req, res) => {
//     res.end("Hello, I am your first selim server");
//     //res.end("<h2>Hello, I am your first selim server</h2>");
// });
//myServer.listen(3000);

// myServer.listen(3000, () => {
//     console.log("server is running at localhost:3000");
// });



//separate port, hostname
//create server for nodejs
const port = 3000;
//const hostname = '127.0.0.1';
const hostname = 'localhost';
const myServer = http.createServer((req, res) => {
    //res.end("Hello, I am your first selim server");
    res.end("<h1>Hello, I am your first selim server</h1>"); //working
    //res.end("<h3>Hello, I am your first selim server</h3>");//not working
});

//use port
// myServer.listen(port, () => {
//     console.log("server is running at localhost:3000");
// });


//use port and hostname
myServer.listen(port, hostname, () => {
    console.log(`server is running successfully at http://${hostname}:${port}`); //use backtrick
});