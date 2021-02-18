const express = require("express");
const routes = express.Router();

// connection pool for PG
// database
const pool = require("./connection");

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
routes.get("/villagers", (req, res) => {
    // run the query
  pool.query("SELECT * FROM villagers")
  .then((results) => { // do this when we get the rsults
    
    // make the DB data match the front end format
    const villagers = results.rows.map((result) => {
      const newResult = result;

      // transforming the data
      // database doesn't always exactly match
      // what we want on the front end
      newResult["bubble-color"] = result.bubblecolor;
      newResult["text-color"] = result.textcolor;

      return newResult;
    });

    // return the formatted data to the database
    res.json(villagers);
  });
});

// accept POST request at URI: /villagers
routes.post("/villagers", (req, res) => {
  let villager = req.body;

  pool
    .query(
      `
    INSERT INTO 
        villagers(name, personality, birthday, gender, catchphrase, imageuri, bubblecolor, textcolor) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `,
      [
        villager.name,
        villager.personality,
        villager.birthday,
        villager.gender,
        villager["catch-phrase"],
        villager["image-uri"],
        villager["bubble-color"],
        villager["text-color"],
      ]
    )
    .then((results) => {
      res.status(201); // created
      res.json(villager); // return the item we created
    });
});

// accept PUT request at URI: /villagers
routes.put("/villagers/:id", (req, res) => {
  villagers.splice(req.params.id, 1, req.body);
});
// accept DELETE request at URI: /villagers
routes.delete("/villagers/:id", (req, res) => {
  const deleteIndex = villagers.findIndex((villager) => {
    return villager.id === parseInt(req.params.id);
  });
  villagers.splice(deleteIndex, 1);
  res.status(204);
  res.json(villagers);
});

module.exports = routes;
