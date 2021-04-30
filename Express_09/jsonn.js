const express = require('express');
const appp = express();
const PORT = 3001;

//npm install body-parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
appp.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
appp.use(bodyParser.json());

appp.post('/jss', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name}. You are ${age} year old.`);
});


appp.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); //backtrick
});