const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
} = require('../controllers/product.controller');

router.route('/:category_id').get(getProducts).post(createProduct);

module.exports = router;
