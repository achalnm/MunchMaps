const express = require('express');
const router = express.Router();
const db = require('../db');

const VALID_CATEGORY_IDS = [1, 2, 3];
const VALID_DISTANCE_IDS = [1, 2, 3];
const VALID_PRICE_IDS = [1, 2, 3];
const VALID_SERVICE_IDS = [1, 2, 3];
const VALID_RATINGS = ['0.00', '1.00', '2.00', '3.00', '4.00', '5.00'];

function parseId(val, allowed) {
  const n = parseInt(val, 10);
  return allowed.includes(n) ? n : null;
}

router.get('/', async (req, res) => {
  const { categoryType, ratingValue, distanceRange, priceRange, serviceType, search } = req.query;
  const errors = [];

  let category = null, distance = null, price = null, service = null, rating = null;

  if (categoryType !== undefined && categoryType !== '') {
    category = parseId(categoryType, VALID_CATEGORY_IDS);
    if (category === null) errors.push('categoryType must be 1, 2, or 3');
  }
  if (distanceRange !== undefined && distanceRange !== '') {
    distance = parseId(distanceRange, VALID_DISTANCE_IDS);
    if (distance === null) errors.push('distanceRange must be 1, 2, or 3');
  }
  if (priceRange !== undefined && priceRange !== '') {
    price = parseId(priceRange, VALID_PRICE_IDS);
    if (price === null) errors.push('priceRange must be 1, 2, or 3');
  }
  if (serviceType !== undefined && serviceType !== '') {
    service = parseId(serviceType, VALID_SERVICE_IDS);
    if (service === null) errors.push('serviceType must be 1, 2, or 3');
  }
  if (ratingValue !== undefined && ratingValue !== '') {
    if (!VALID_RATINGS.includes(ratingValue)) errors.push('ratingValue must be a whole number 0-5');
    else rating = ratingValue;
  }
  if (search !== undefined && search.length > 100) {
    errors.push('search term must be 100 characters or fewer');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  let query = `
    SELECT r.*, rt.Value AS RatingValue
    FROM restaurant r
    LEFT JOIN rating rt ON r.Rating_id = rt.Rating_id
    WHERE 1=1
  `;
  const values = [];

  if (category !== null) {
    query += ' AND r.CategoryID = ?';
    values.push(category);
  }
  if (rating !== null) {
    query += ' AND r.Rating_id = (SELECT Rating_id FROM rating WHERE Value = ?)';
    values.push(rating);
  }
  if (distance !== null) {
    query += ' AND r.DistanceID = ?';
    values.push(distance);
  }
  if (price !== null) {
    query += ' AND r.PriceID = ?';
    values.push(price);
  }
  if (service !== null) {
    query += ' AND r.ServiceTypeID = ?';
    values.push(service);
  }
  if (search && search.trim()) {
    query += ' AND r.Name LIKE ?';
    values.push(`%${search.trim()}%`);
  }

  try {
    const [rows] = await db.query(query, values);
    res.json(rows);
  } catch (err) {
    console.error('DB query error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
