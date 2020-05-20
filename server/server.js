const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");
const app = express();

// open up CORS
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(logger("dev"));

// You can place your routes here, feel free to refactor:
const {example} = require("./routes");
app.use("/api/example", example);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

// app.get('/api/Mentor', function (req, res) {
//     db.getAllReviews((err, data) => {          
//       if(err){                                
//         console.log('Reviews server error');
//         res.status(404).send(data);
//       }else{
//         console.log('Reviews server good');
//         res.status(200).send(data);
//       }
//     })
//   });

//   app.post('/api/Mentor', function (req, res) {
//     db.postReviews(req.body.singleName, req.body.singleReview,(err, data) => {          
//       if(err){                                
//         console.log('Reviews post to server error');
//         res.sendStatus(404)
//       }else{
//         console.log('Reviews post server good');
//         res.sendStatus(200);
//       }
//     })
//   });

//   app.get('/api/Mentii', function (req, res) {
//     db.getAllJavascript((err, data) => {          
//       if(err){                                
//         console.log('js server error');
//         res.status(404).send(data);
//       }else{
//         console.log('js server good');
//         res.status(200).send(data);
//       }
//     })
//   });

//   app.get('/api/Mentii', function (req, res) {
//     db.getAllC((err, data) => {          
//       if(err){                                
//         console.log('c server error');
//         res.status(404).send(data);
//       }else{
//         console.log('c server good');
//         res.status(200).send(data);
//       }
//     })
// });

module.exports = app;
