const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  getCategories,
  createCategory,
} = require('../controllers/category.controller');

const asyncMiddleware = require('../middlewares/async.middleware');

router
  .route('/')
  .get(asyncMiddleware(getCategories))
  .post(upload.single('img'), asyncMiddleware(createCategory));

module.exports = router;
