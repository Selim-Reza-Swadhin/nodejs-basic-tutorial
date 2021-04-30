const express = require('express');
const app = express();

const userRouter = require('./routes/users.route');

//app.use(userRouter);
//app.use("/api/user", userRouter);
app.use("/api/user/", userRouter);




//register route
app.use("/register", (req, res) => {
    //res.send("I am a register page");
    //res.end();
    //2nd step
    // res.status(200).json({
    //     "name": "selim",
    //     "message": "hello response",
    //     statusCode: 200
    // });
    //3rd step
    //res.redirect('/login');
    //4th step
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/register.html");
});

//register route
app.use("/login", (req, res) => {
    //res.send("I am a login page");
    //res.cookie("name", "selim");
    //res.clearCookie("name");
    res.append("id", "0987123");
    res.end();
});


//root route
app.use("/", (req, res) => {
    // res.send("I am a get request at HOME route");
    // res.end();
    //2nd step
    res.statusCode = 202;
    res.sendFile(__dirname + "/views/index.html");
});


//not found route
app.use((req, res) => {
    res.send("<h3 style='color:red'>404! not found</h3>");
    res.end();
});





module.exports = app;