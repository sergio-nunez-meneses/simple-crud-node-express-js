const connection = require('./models/connection');
const Product = require('./models/product');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const crudRoutes = require('./routes/crud');

// to fix the Cross Origin Resource Sharing (CORS) bug
app.use((req, res, next) => {
  // responses
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all requests from all origins
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // add these header to other requests
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // allow specific request methods
  next();
});

// convert the body of the request to json
app.use(bodyParser.json());
// use the new routes for all requests to /api/products
app.use('/api/products', crudRoutes);

module.exports = app;
