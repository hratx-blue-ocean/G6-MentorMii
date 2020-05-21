const createError = require("http-errors");
const logger = require("morgan");
const express = require("express");
const app = express();
const db = require('../database/queries');
const port = 3033;

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
// const {example} = require("./routes");
// app.use("/api/example", example);

app.get("/api/Mentor", (req, res) => {
  db.getAllMentors((err, data) => {
    if (err) {
      console.log('Mentor GET error in server');
      res.status(404).send(err);
    } else {
      console.log('Mentor success server');
      res.status(200).send(data);
    }
  })
})

app.get("/api/Mentii", (req, res) => {
  db.getAllMentiis((err, data) => {
    if (err) {
      console.log('Mentii error in server');
      res.status(404).send(err);
    } else {
      console.log('Mentii success server');
      res.status(200).send(data);
    }
  })
})



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

app.listen(port, function() {
  console.log('listening on port 3033')
})

module.exports = app;