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
        //InsertData(conn);
        //DeleteData(conn);
        //UpdateData(conn);
        SelectData(conn);
    }
});


//insert data
function InsertData(conn) {
    let sql_query = "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('swadhin','15','nine','01724063643','natore')";
    conn.query(sql_query, function(err) {
        if (err) {
            console.log("Data not inserted");
        } else {
            console.log("Data inserted success");
        }
    });
}

//delete data
function DeleteData(conn) {
    let sql_query = "DELETE FROM `students_list` WHERE id= '4'";
    conn.query(sql_query, function(err) {
        if (err) {
            console.log("Data not deleted");
        } else {
            console.log("Data deleted success");
        }
    });
}

//update data
function UpdateData(conn) {
    let sql_query = "UPDATE `students_list` SET `class` = '10', `phone` = '01710392318', `city` = 'dhaka' WHERE id = '3'";
    conn.query(sql_query, function(err) {
        if (err) {
            console.log("Data not updated");
        } else {
            console.log("Data update success");
        }
    });
}

//select data
function SelectData(conn) {
    let sql_query = "SELECT * FROM `students_list`";
    conn.query(sql_query, function(err, result) {
        // if (err) {
        //     console.log("Data not selected");
        // } else {
        //     console.log(result);
        // }

        if (err) throw err;
        console.log(result);
    });
}