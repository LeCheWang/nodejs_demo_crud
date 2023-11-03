const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '_' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middeware');
const roleMidleware = require('../middlewares/role.middleware');
const typeRole = require('../constants/type.role');

const {
  createCategory,
  getCategories,
} = require('../controllers/category.controller');

router
  .route('/')
  .get(asyncMiddleware(getCategories))
  .post(
    asyncMiddleware(authMiddleware),
    roleMidleware(typeRole.ADMIN),
    upload.single('img'),
    asyncMiddleware(createCategory),
  );

module.exports = router;
