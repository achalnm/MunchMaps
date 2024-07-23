const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");

// MySQL connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "CaptainAmerica27",
  database: "munch_maps",
});

// Attempt to connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err.message);
    return;
  }
  console.log("Connected to MySQL database");
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route to fetch restaurants data by category, rating, distance, price, and service type
app.get("/restaurants", (req, res) => {
  const { categoryType, ratingValue, distanceRange, priceRange, serviceType } = req.query;
  let query = "SELECT * FROM restaurant WHERE 1=1";

  if (categoryType) {
    query += ` AND CategoryID = ${categoryType}`;
  }
  if (ratingValue) {
    query += ` AND Rating_id = (SELECT Rating_id FROM rating WHERE Value = ${ratingValue})`;
  }
  if (distanceRange) {
    query += ` AND DistanceID = ${distanceRange}`;
  }
  if (priceRange) {
    query += ` AND PriceID = ${priceRange}`;
  }
  if (serviceType) {
    query += ` AND ServiceTypeID = ${serviceType}`;
  }

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching restaurants: ", error);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
