const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const data = require("./data.json");

app.get("/", (req, res) => {
  res.render("index", { nama: "Prosuk", data });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
