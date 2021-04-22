const fs = require('fs');
const http = require('http');

var server = http.createServer(function(req, res) {

    //Async
    // if (req.url == '/') {
    //     fs.exists('hello.html', function(error) {
    //         if (error) {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.write('true');
    //             res.end();
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.write('false');
    //             res.end();
    //         }
    //     });
    // }


    //Sync
    if (req.url == '/') {
        var result = fs.existsSync('home.html');
        if (result) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('true');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('false');
            res.end();
        }
    }
});

server.listen(4040);
console.log("Server Rus Success");