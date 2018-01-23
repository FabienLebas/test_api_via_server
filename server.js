const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/api", function (request, result) {
  result.send("Products API");
});

app.use("/static", express.static('build/static'));

app.get("*", function (request, result) {
  result.sendFile(__dirname + "/build/index.html");
});
