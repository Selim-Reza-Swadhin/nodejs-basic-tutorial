const express = require('express');
const app = express();

//root route
app.get("/", (req, res) => {
    res.send("I am a get request at HOME route");
    res.end();
});

//about route
// app.get("/about", (req, res) => {
//     res.send("I am a get request at ABOUT route");
// });

//contact route
// app.get("/contact", (req, res) => {
//     res.send("I am a get request at CONTACT route");
// });

//post route
app.post("/", (req, res) => {
    res.send("I am a get request at POST route");
    res.end();
});

//put route
app.put("/", (req, res) => {
    res.send("I am a get request at PUT route");
    res.end();
});

//delete route
app.delete("/", (req, res) => {
    res.send("I am a get request at DELETE route");
    res.end();
});



module.exports = app;