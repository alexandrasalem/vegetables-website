var express = require("express");
const port = process.env.PORT || 5000;
var path = require("path");
const bodyParser = require("body-parser");
const app = express();

//collecting routers
var indexRouter = require("./routes/index");
var gettingStartedRouter = require("./routes/gettingstarted");
var calendarRouter = require("./routes/calendar");

//misc...
// app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

//views
express.static(__dirname, []);
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//routing
app.use("/", indexRouter);
app.use("/gettingstarted/", gettingStartedRouter);
app.use("/calendar/", calendarRouter);

//start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
