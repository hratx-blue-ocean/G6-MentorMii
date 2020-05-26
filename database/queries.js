var mysql = require("mysql");
var mysqlConfig = require("./dbConfig.js");
var connection = mysql.createConnection(mysqlConfig);

const getAllMentors = (cb) => {
    // let where = 'javascript = "${javascript}";'
  connection.query("SELECT * FROM Mentor;", (err, results) => {
    //selects all from the mentor table in the schema
    if (err) {
      console.log("Mentor GET query error"); 
      cb(err, null);
    } else {
      console.log("Mentor GET query good");
      cb(null, results);
    }
  });
};

const getAllMentiis = (cb) => {
  // let where = 'javascript = "${javascript}";'
connection.query("SELECT * FROM Mentii;", (err, results) => {
  //selects all from the mentor table in the schema
  if (err) {
    console.log("Mentii GET query error"); 
    cb(err, null);
  } else {
    console.log("Mentii GET query good");
    cb(null, results);
  }
});
};

module.exports = {
  getAllMentors,
  getAllMentiis
};


