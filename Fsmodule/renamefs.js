const fs = require('fs');
const http = require('http');

var server = http.createServer(function(req, res) {

    //Async
    // if (req.url == '/') {
    //     fs.unlink('hello.html', function(error) {
    //         if (error) {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.write('file delete fail');
    //             res.end();
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.write('file delete success');
    //             res.end();
    //         }
    //     });
    // }


    //Sync
    if (req.url == '/') {
        var result = fs.unlinkSync('rezaa.txt');
        if (result) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('file delete fail');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('file delete success');
            res.end();
        }
    }
});

server.listen(4040);
console.log("Server Rus Success");