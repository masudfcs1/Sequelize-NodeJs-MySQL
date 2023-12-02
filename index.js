const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const User = require("./models/user");
var colors = require("@colors/colors");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

User.sync({ force: true });

app.listen(3000, () => {
  console.log("App will run on: http://localhost:3000".bgMagenta);
});
