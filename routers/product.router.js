const express = require('express');
const router = express.Router();

const {
  getProducts,
  createProduct,
} = require('../controllers/product.controller');

const AsyncMiddleware = require("../middlewares/async.middleware")

router.route('/:category_id').get(AsyncMiddleware(getProducts)).post(AsyncMiddleware(createProduct));

module.exports = router;
