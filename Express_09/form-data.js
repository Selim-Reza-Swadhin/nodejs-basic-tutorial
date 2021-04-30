const express = require('express');
const appp = express();
const PORT = 3001;

//npm install body-parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
appp.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
appp.use(bodyParser.json());


//form-data
appp.get('/register', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//receive data from browser url
appp.post('/register', (req, res) => {
    const fullname = req.body.fullName;
    const email = req.body.email;
    const phone = req.body.phone;
    res.send(`Your fullname is ${fullname}, <br> email ${email} <br> and phone ${phone}.`);
});


appp.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); //backtrick
});