const express = require("express");

const app = express();

//printing hello world
app.get("/", (req, res) => {
  res.json({ msg: "Lasho World" });
});

app.get("/sujan", (req, res) => {
  res.json({ msg: "Lasho sujan" });
});

app.get("/sujan/kusum", (req, res) => {
  res.json({ msg: "Lasho kusum" });
});

app.listen(8000, () => {
  console.log("application is running");
});
