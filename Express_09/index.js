const express = require('express');
const appp = express();
const PORT = 3001;


//appp.get('/', (req, res) => {
//res.send("I am home route");
//Query parameter
//http://localhost:3001/?id=109
//localhost:3001/?id=109&name=selim
//const idd = req.query.id;
//const namee = req.query.name;
//res.send(`<h2>Student name is : ${namee} id is : ${idd}</h2>`);
//es6 same code
//const { id, name } = req.query;
//res.send(`<h2>Student name is : ${name} id is : ${id}</h2>`);
//});

//Route parameter
//:id and :age is value variable
appp.get('/userId/:id/userAge/:age', (req, res) => {
    //Route parameter
    //localhost:3001/key/value/key/value
    //localhost:3001/userId/101/userAge/32  
    const id = req.params.id;
    const age = req.params.age;
    res.send(`<h2>Student id is : ${id} Age is : ${age}</h2>`);
});

//Header parameter header('key')
appp.get('/header', (req, res) => {
    const id = req.header('id');
    const age = req.header('age');
    res.send(`<h2>Student id is : ${id} Age is : ${age}</h2>`);
});


appp.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); //backtrick
});