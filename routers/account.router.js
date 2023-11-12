const express = require('express');
const router = express.Router();

const {
  getAccounts,
  writePdfFile,
} = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middeware');
const roleMidleware = require('../middlewares/role.middleware');
const typeRole = require('../constants/type.role');

const generateExcelFile = require('../demo');

const multer = require('multer');
const upload = multer({
  dest: 'uploads/',
});

router
  .route('/')
  .get(
    asyncMiddleware(authMiddleware),
    roleMidleware([typeRole.ADMIN]),
    asyncMiddleware(getAccounts),
  );

router.route('/file').get(asyncMiddleware(generateExcelFile));

router
  .route('/file_pdf')
  .post(upload.single('img'), asyncMiddleware(writePdfFile));
module.exports = router;
