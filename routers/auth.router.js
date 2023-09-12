const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth.controller');

const AsyncMiddleware = require("../middlewares/async.middleware")

router.route('/register').post(AsyncMiddleware(register));
router.route('/login').post(AsyncMiddleware(login));

module.exports = router;
