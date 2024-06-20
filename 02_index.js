const express = require("express");
const app = express();

//dynamic URL building or dynamic routing
app.get("/", (req, res) => {
  res.json({ msg: "Namaste World" });
});

app.get("/:Name", (req, res) => {
  const data = req.params.Name;
  res.json({ msg: `Namaste ${data}` });
});

app.listen(8000, () => console.log("application is running"));
