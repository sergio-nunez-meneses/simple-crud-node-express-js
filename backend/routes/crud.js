const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crud');

// CREATE (POST requests must be placed above GET requests)
router.post('/', crudController.createProduct);
// READ
router.get('/:id', crudController.getSingleProduct);
router.get('/', crudController.getAllProducts);
// UPDATE
router.put('/:id', crudController.modifyProduct);
// DELETE
router.delete('/:id', crudController.deleteProduct);

module.exports = router;
