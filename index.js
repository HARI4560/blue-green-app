const express = require("express");
const app = express();

const VERSION = process.env.VERSION || "blue";

app.get("/", (req, res) => {
  res.send(`Running version: ${VERSION}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});