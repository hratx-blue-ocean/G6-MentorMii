var mysql = require("mysql");
var mysqlConfig = require("./dbconfig.js");
var connection = mysql.createConnection(mysqlConfig);


const getAllJavaScript = (cb) => {
    // let where = 'javascript = "${javascript}";'
  connection.query("SELECT * FROM Mentor", (err, results) => {
    //selects all from the mentor table in the schema
    if (err) {
      console.log("js query error"); //using an error first callback
      cb(err, null);
    } else {
      console.log("js query good");
      cb(null, results);
    }
  });
};
// const getAllC = (cb) => {
//     let where = 'C = "${C}";'
//     connection.query("SELECT skill FROM Mentor WHERE" + where, (err, results) => {
//       //selects all from the students table in the schema
//       if (err) {
//         console.log("c query error"); //using an error first callback
//         cb(err, null);
//       } else {
//         console.log("c query good");
//         cb(null, results);
//       }
//     });
//   };
// const postReviews = (name, review, cb) => {
//   connection.query(
//     "INSERT INTO Mentor(name, review) VALUES (? , ?)",
//     [name, review],
//     (err, data) => {
//       if (err) {
//         console.log("Reviews query error");
//         cb(err, null);
//       } else {
//         console.log("Reviews query good");
//         cb(null, data);
//       }
//     }
//   );
// };
// const getAllReviews = (name, review, cb) => {
//   connection.query(
//     "SELECT * FROM Mentor(name, review)",
//     [name, review],
//     (err, data) => {
//       if (err) {
//         console.log("review query error");
//         cb(err, null);
//       } else {
//         console.log("review query good");
//         cb(null, data);
//       }
//     }
//   );
// };
module.exports = {
  getAllJavaScript,
  // getAllC,
  // postReviews,
  // getAllReviews
};
