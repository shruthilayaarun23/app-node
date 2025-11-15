const express = require("express");
const config = require("./config");

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from Node demo app. API KEY = ${config.apiKey}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
