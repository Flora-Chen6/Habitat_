import mysql from "mysql"
// const mongoose = require("mongoose");

// module.exports = (mongodb) => {
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	};
// 	try {
// 		mongoose.connect(process.env.MONGODB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  // password: "process.env.DB_PASSWORD",
  password: "123456",
  database:"Login"
})

// export const db = mysql.createConnection({
//     // host:"127.0.0.1:3306",
//     host:"127.0.0.1",
//     user:"flora",
//     password: "123", 
//     database:"Login"
//   })

// // const mysql = require('mysql2')

// // const pool = mysql.createPool({
// //     host:"localhost",
// //     user:"root",
// //     database:"Login",
// //     password:process.env.DB_PASSWORD,
// // })

// // query = "SELECT * FROM login;";

// // pool.execute()

// // module.exports = pool.promise();