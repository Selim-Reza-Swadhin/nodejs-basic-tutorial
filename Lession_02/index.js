const fs = require('fs');
//console.log(fs);


// How to create and write file using asynchronous method
//traditional function
// fs.writeFile('demo1.txt', "This ia a sample text", function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful")
//     }
// });

//es6 function
// fs.writeFile('demo1.txt', "This ia a sample hello selim text", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Successful")
//     }
// });


// How to create and write file using synchronous method
// var result = fs.writeFileSync("demo1.txt", "My name is Anisul Islam file sync");
// if (result) {
//     console.log(result);
// } else {
//     console.log("Successful")
// }


// How to update file
// fs.appendFile("demo1.txt", ". I am 32 years old", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Updated Successful")
//     }
// })

// How to create and write file using synchronous method
// var sync = fs.appendFileSync("demo1.txt", ". I am 33 years old");
// if (sync) {
//     console.log(sync);
// } else {
//     console.log("Updated Successful")
// }


// How to read file
// fs.readFile("demo1.txt", (data, err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successful");
//     }
// });

// How to read file
// fs.readFile("demo1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successful");
//     }
// });

// How to read file
// fs.readFile("demo1.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// How to read file
// fs.readFile("demo1.txt", 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// How to rename file
// fs.rename("demo1.txt", 'demo2.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully renamed")
//     }
// });


// How to delete file
// fs.unlink('demo2.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("successfully deleted")
//     }
// });

// How to delete file
// fs.unlink('demo1.txt', (result) => {
//     if (result) {
//         console.log("successfully not deleted");
//     } else {
//         console.log("successfully deleted")
//     }
// });

// How to delete file
// fs.unlink('demo1.txt', (result) => {
//     if (result) {
//         console.log("successfully deleted");
//     } else {
//         console.log("successfully not deleted")
//     }
// });

// How to create and write file using synchronous method
// How to check the existance
// fs.exists('demo2.txt', (result) => {
//     if (result) {
//         console.log("found");
//     } else {
//         console.log("not found")
//     }
// })


// How to create and write file using synchronous method
let result = fs.existsSync('demo2.txt');

if (result) {
    console.log("found");
} else {
    console.log("not found")
}