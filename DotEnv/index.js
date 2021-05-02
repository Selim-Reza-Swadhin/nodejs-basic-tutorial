// require('dotenv').config();
// const express = require('express');
// const app = express();

// //const PORT = 3333;
// //use dotenv
// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("Hello i am home roue");
// })

// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`); //backtrick
// });



require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello I am home route");
});

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});