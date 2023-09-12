const express = require('express');
const router = express.Router();

const {
  createCategory,
  getCategories,
} = require('../controllers/category.controller');

const AsyncMiddleware = require("../middlewares/async.middleware")

router.route('/').post(AsyncMiddleware(createCategory)).get(AsyncMiddleware(getCategories));

module.exports = router;
