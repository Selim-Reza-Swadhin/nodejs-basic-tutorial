const express = require('express');
const app = express();

//root route
app.get("/", (req, res) => {
    res.send("I am a get request at HOME route");
    res.end();
});

//register route
app.get("/register", (req, res) => {
    res.send("<h2>I am a get request at register route</h2>");
    res.end();
});

//login route
app.get("/login", (req, res) => {
    res.send("I am a get request at login route");
    res.end();
});


//not found route
app.use((req, res) => {
    res.send("<h3 style='color:red'>404! not found</h3>");
    res.end();
});





module.exports = app;