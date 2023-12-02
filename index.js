const express = require("express");
const app = express();
var bodyParser = require("body-parser");
require("./models");
var colors = require("@colors/colors");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("App will run on: http://localhost:3000".bgMagenta);
});
