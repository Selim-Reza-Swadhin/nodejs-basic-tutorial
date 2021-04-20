const fs = require("fs");
const http = require("http");
const PORT = 3000;
const hostName = "127.0.0.1";

// const server = http.createServer((req, res) => {
//     //res.end("Welcome to the server selim");
//     console.log(req.url);
//     res.end("Welcome");
// });


//route
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile("./views/index.html", (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/about') {
        fs.readFile("./views/about.html", (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/contact') {
        fs.readFile("./views/contact.html", (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile("./views/error.html", (err, data) => {
            res.writeHead(400, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});

server.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
});