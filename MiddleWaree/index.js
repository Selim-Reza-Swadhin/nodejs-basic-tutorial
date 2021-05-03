const  express = require('express');
const  app = express();
const PORT = 3000;

// app.get('/', (req, res) =>{
//     console.log('I am home');
//     res.send('<h1>I am home route</h1>');
// });


const myMiddleware = (req, res, next)=>{
    console.log('Middleware function');
    req.currentTime = new Date(Date.now());
    next();
}

//common middleware
app.use(myMiddleware);


app.get('/', myMiddleware, (req, res) =>{
    //console.log('I am home');
    console.log('I am home '+ req.currentTime);
    res.send('<h1>I am home route</h1>');
});

//about route
// app.get('/about', myMiddleware, (req, res) =>{
//     //console.log('I am home');
//     console.log('I am about '+ req.currentTime);
//     res.send('<h1>I am about route</h1>');
// });

app.get('/about', (req, res) =>{
    //console.log('I am home');
    console.log('I am about '+ req.currentTime);
    res.send('<h1>I am about route</h1>');
});

//error handler
// app.use((req, res, nextt)=>{
//     res.send("404! not found.");
//     nextt();
// });

//error handler
// app.use((err, req, res, nextt)=>{
//     res.status(500).send('Something broke!');
//     nextt();
// });

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});