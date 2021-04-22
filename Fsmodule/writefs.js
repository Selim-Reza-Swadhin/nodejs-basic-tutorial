const fs = require('fs');
const http = require('http');

var server = http.createServer(function(req, res) {

    //Async
    // fs.writeFile('hello.html', 'Welcome to Bangladesh', function(error) {
    //     if (error) {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write('file write fail');
    //         res.end();
    //     } else {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write('file write success');
    //         res.end();
    //     }
    // });


    //Sync
    var error = fs.writeFileSync('hello.html', 'Welcome to Bangladesh selim');
    if (error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('file write fail');
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('file write success');
        res.end();
    }
});

server.listen(4040);
console.log("Server Rus Success");