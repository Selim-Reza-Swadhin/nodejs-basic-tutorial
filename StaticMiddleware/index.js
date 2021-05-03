const  express = require('express');
const  app = express();
const PORT = 3000;

//image and style link
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/index.html');
});


app.listen(PORT, (req, res)=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});