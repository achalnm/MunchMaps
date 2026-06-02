require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const restaurantsRouter = require('./routes/restaurants');

app.use(express.static('public'));
app.use('/restaurants', restaurantsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
