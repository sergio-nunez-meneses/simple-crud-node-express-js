const connection = require('./models/connection');
const Product = require('./models/product');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

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

// CREATE (POST requests must be placed above GET requests)
app.post('/api/products', (req, res, next) => {
  delete req.body._id;
  const product = new Product({
    ...req.body
  });

  product.save()
    .then(() => res.status(201).json({ product }))
    .catch(error => res.status(400).json({ error }));
});

// READ
// get one product
app.get('/api/products/:id', (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then(product => res.status(200).json({ product }))
    .catch(error => res.status(404).json({ error }));
});
// get all products
app.get('/api/products', (req, res, next) => {
  Product.find()
    .then(products => res.status(200).json({ products }))
    .catch(error => res.status(400).json({ error }));
});

// UPDATE
app.put('/api/products/:id', (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, {
    ...req.body, _id: req.params.id
  })
    .then(() => res.status(200).json({ message: 'Modified!' }))
    .catch(error => res.status(400).json({ error }));
});

// DELETE
app.delete('/api/products/:id', (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted!' }))
    .catch(error => res.status(400).json({ error }));
});

module.exports = app;
