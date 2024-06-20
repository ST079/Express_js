const express = require("express");
const app = express();

//dynamic URL building or dynamic routing
app.get("/", (req, res) => {
  res.json({ msg: "Namaste World" });
});

// app.get("/:Name", (req, res) => {
//   const data = req.params.Name;
//   res.json({ msg: `Namaste ${data}` });
// });

//sending Default value of b
app.get("/:a/:b?", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b) || Number("5");
  res.json(`the sum of ${a} + ${b} is ${a + b}`);
});

app.listen(8000, () => console.log("application is running"));
