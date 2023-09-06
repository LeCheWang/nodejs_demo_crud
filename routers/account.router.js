const express = require('express');
const router = express.Router();

const {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
} = require('../controllers/account.controller');

router.route('/').get(getAccounts).post(createAccount);

router
  .route('/:id') //params
  .patch(updateAccount)
  .delete(deleteAccount);

module.exports = router;
