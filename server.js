const express = require("express");
const app = express();
const { Client } = require('pg');
const connectionString = process.env.REACT_APP_DATABASE_URL;

console.log(connectionString);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/api", function (request, result) {
  const client = new Client({
    connectionString: connectionString,
    ssl: true
  });
  client.connect();
  client.query('SELECT * FROM products', (err, res) => {
    if(err){
      console.warn("error during query : " + err);
      result.send("Products API error");
    } else {
      result.json(res.rows);
    }
    client.end()
  })
});

app.use("/static", express.static('build/static'));

app.get("*", function (request, result) {
  result.sendFile(__dirname + "/build/index.html");
});
