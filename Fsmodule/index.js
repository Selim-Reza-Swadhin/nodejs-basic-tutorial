const fs = require('fs');
const http = require('http');

var server = http.createServer(function(req, res) {

    //Async
    // if (req.url == '/') {
    //     fs.readFile('home.html', function(error, data) {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write(data);
    //         res.end();
    //     });
    // }

    //Sync
    if (req.url == '/') {
        let myData = fs.readFileSync('home.html');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(myData);
        res.end();
    }
});

server.listen(4040);
console.log("Server Rus Success");