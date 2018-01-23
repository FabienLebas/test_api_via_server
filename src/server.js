const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", function (request, result) {
  result.send("Hello World!");
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/products", function (request, result) {
  result.send("Products");
});
