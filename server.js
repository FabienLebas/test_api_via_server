const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static('build'));

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/api/products", function (request, result) {
  result.send("Products API");
});

app.get("*", function (request, result) {
  result.sendFile("./build/index.html");
});
