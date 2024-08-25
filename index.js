const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/detail/:id", (req, res) => {
  const { name, page } = req.query;
  const { id } = req.params;
  res.json(`Id: ${id}, name: ${name}, page: ${page}`);
});

app.post("/create", (req, res) => {
  const body = req.body;
  res.json(body);
});

app.put("/updated", (req, res) => {
  res.json("Updated");
});

app.delete("/deleted", (req, res) => {
  res.json("Deleted");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}/`)
);
