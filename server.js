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

const villagers = [
  {
    id: 12,
    name: "Nate",
    personality: "Lazy",
    birthday: new Date(2020, 8, 16),
    gender: "Male",
    "catch-phrase": "yawwwn",
    image_uri: "https://acnhapi.com/v1/images/villagers/12",
    "bubble-color": "#e8b010",
    "text-color": "#fffce9",
    showMoreInfo: true,
  },
  {
    id: 200,
    name: "Bertha",
    personality: "Normal",
    birthday: new Date(2020, 4, 25),
    gender: "Female",
    "catch-phrase": "bloop",
    image_uri: "https://acnhapi.com/v1/images/villagers/200",
    "bubble-color": "#00d1bd",
    "text-color": "#fffce9",
    showMoreInfo: true,
  },
  {
    id: 20,
    name: "Beardo",
    personality: "Smug",
    birthday: new Date(2020, 12, 20),
    gender: "Male",
    "catch-phrase": "whiskers",
    image_uri: "https://acnhapi.com/v1/images/villagers/20",
    "bubble-color": "#3fd8e0",
    "text-color": "#fffce9",
    showMoreInfo: true,
  },
];

// respond with "Hello Class!" at URI: /students
app.get("/api/villagers", (req, res) => {
  res.json(villagers);
});


// accept POST request at URI: /villagers
app.post("/api/villagers", (req, res) => {
  let villager = req.body;
  villager.id = villagers.length + 1;
  villagers.push(req.body);
  res.json(villagers);
});
// accept PUT request at URI: /villagers
app.put("/api/villagers/:id", (req, res) => {
  villagers.splice(req.params.id, 1, req.body);
});
// accept DELETE request at URI: /villagers
app.delete("/api/villagers/:id", (req, res) => {
  const deleteIndex = villagers.findIndex((villager) => {
    return villager.id === parseInt(req.params.id);
  });
  villagers.splice(deleteIndex, 1);
  res.status(204);
  res.json(villagers);
});
app.listen(port, () => console.log(`Listening on port: ${port}.`));
