const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth.controller');
const asyncMiddlware = require('../middlewares/async.middleware');

router.route('/register').post(asyncMiddlware(register));
router.route('/login').post(asyncMiddlware(login));

module.exports = router;
