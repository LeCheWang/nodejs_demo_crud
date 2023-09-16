const bcryptjs = require('bcryptjs');
const accountModel = require('../models/account.model');
const accountValid = require('../validations/account.valid');
const ErrorResponse = require("../helpers/ErrorResponse")

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    const { error } = accountValid(body);
    if (error) {
      // return res.status(400).json({
      //   statusCode: 400,
      //   message: error.message,
      // });
      throw new ErrorResponse(400, error.message);
    }
    const newAccount = await accountModel.create(body);
    return res.status(200).json(newAccount);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({ username });
    if (!account) {
      // return res.status(404).json({
      //   statusCode: 404,
      //   message: 'Tài khoản hoặc mật khẩu không đúng',
      // });
      throw new ErrorResponse(400, 'Tài khoản hoặc mật khẩu không đúng');
    }

    const checkPass = bcryptjs.compareSync(password, account.password);

    if (!checkPass) {
      // return res.status(404).json({
      //   statusCode: 404,
      //   message: 'Tài khoản hoặc mật khẩu không đúng',
      // });
      throw new ErrorResponse(400, 'Tài khoản hoặc mật khẩu không đúng');
    }

    //khi đã đúng tk và mk
    //jwt

    return res.status(200).json({
      statusCode: 200,
      message: 'Đăng nhập thành công',
    });
  },
};