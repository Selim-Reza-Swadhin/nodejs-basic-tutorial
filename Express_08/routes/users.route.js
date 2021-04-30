const express = require('express');
const router = express.Router();

//register route
router.get("/register", (req, res) => {
    res.send("<h2>I am a get request at register route</h2>");
    res.end();
});

//login route
router.get("/login", (req, res) => {
    res.send("I am a get request at login route");
    res.end();
});





module.exports = router;