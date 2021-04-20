let mysql = require('mysql');
//console.log(mysql);


let DatabaseConnectionConfig = {
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
}

//connect phpmyadmin and start your xampp control panel
let conn = mysql.createConnection(DatabaseConnectionConfig);

conn.connect(function(err) {
    if (err) {
        console.log("Connection failed");
    } else {
        console.log("Connection Success");
        InsertData(conn);
    }
});


//insert data
function InsertData(conn) {
    let sql_query = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('selim','12','nine','01724063642','natore')";
    conn.query(sql_query, function(err) {
        if (err) {
            console.log("Data not inserted");
        } else {
            console.log("Data inserted success");
        }
    });
}