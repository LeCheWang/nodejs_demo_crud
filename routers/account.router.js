const express = require('express');
const router = express.Router();

const { getAccounts } = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middeware');
const roleMidleware = require('../middlewares/role.middleware');
const typeRole = require('../constants/type.role');

router
  .route('/')
  .get(
    asyncMiddleware(authMiddleware),
    roleMidleware([typeRole.ADMIN]),
    asyncMiddleware(getAccounts),
  );

module.exports = router;
