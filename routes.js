const express = require("express");
const routes = express.Router();

// connection pool for PG
// database
const pool = require("./connection");

const villagers = [];

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
