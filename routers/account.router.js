const express = require('express');
const router = express.Router();

const {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
} = require('../controllers/account.controller');

const AsyncMiddleware = require("../middlewares/async.middleware")
const AuthMiddleware = require("../middlewares/auth.middleware")

router.route('/').get(AsyncMiddleware(AuthMiddleware) , AsyncMiddleware(getAccounts)).post(AsyncMiddleware(createAccount));

router
  .route('/:id') //params
  .patch(AsyncMiddleware(updateAccount))
  .delete(AsyncMiddleware(deleteAccount));

module.exports = router;
