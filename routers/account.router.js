const express = require('express');
const router = express.Router();

const { getAccounts } = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middeware');

router
  .route('/')
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getAccounts));

module.exports = router;
