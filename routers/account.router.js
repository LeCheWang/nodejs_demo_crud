const express = require('express');
const router = express.Router();

const {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
} = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router
  .route('/')
  .get(asyncMiddleware(authMiddleware), roleMiddleware(['user']), asyncMiddleware(getAccounts))
  .post(createAccount);

router.route('/:id').patch(updateAccount).delete(deleteAccount);

module.exports = router;
