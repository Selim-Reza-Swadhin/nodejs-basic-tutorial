const { write } = require('fs');
var http = require('http');
var URL = require('url');

//url separate
var server = http.createServer(function(req, res) {
    var myURL = "http://selimrezaswadhin.com/blog.html?year=2020&month=july";

    var myURLobj = URL.parse(myURL, true);

    var myHostName = myURLobj.host;
    var myPathName = myURLobj.pathname;
    var mySearchName = myURLobj.search;
    var myQueryName = myURLobj.query;

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(myHostName);
    res.write(myPathName);
    res.write(mySearchName);
    res.write(myQueryName.month);
    res.end();

});

server.listen(5050);
console.log("Server run success");