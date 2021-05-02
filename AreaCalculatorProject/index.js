const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//root route
app.get('/', (req, res) => {
    //res.send('hello');
    res.sendFile(__dirname + '/index.html');
});

//circle route
app.get('/circle', (req, res) => {
    //res.send('hello');
    res.sendFile(__dirname + '/circle.html');
});

//triangle route
app.get('/triangle', (req, res) => {
    //res.send('hello');
    res.sendFile(__dirname + '/triangle.html');
});

//triangle route
app.post('/triangle', (req, res) => {
    const height = req.body.height; //height is name="height"
    const base = req.body.base; //base is name="base"
    const area = 0.5 * base * height;
    res.send(`<h2>Area of Triangle is : ${area}</h2>`);
});

//circle route
app.post('/circle', (req, res) => {
    const radius = req.body.radius; //form is name="radius""
    const area = Math.PI * radius * radius;
    res.send(`<h2>Area of Circle is : ${area}</h2>`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); //backtrick
});