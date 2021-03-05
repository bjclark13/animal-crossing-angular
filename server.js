// server.js
const express = require("express");

// creates an instance of an Express server
const app = express();
const port = 3000;

// Add cors here to allow to use across domain
// names
// api is now publicly available
const cors = require("cors");
app.use(cors());

// Add express static here in order to
// run the angular app from folder called public
app.use(express.static(__dirname + "/public"));

// req.param
// req.query
// req.body
app.use(express.json());

const routes = require("./routes");
app.use("/api/", routes);

app.listen(port, () => console.log(`Listening on port: ${port}.`));
