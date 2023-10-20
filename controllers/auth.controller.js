const bcryptjs = require('bcryptjs');
const accountModel = require('../models/account.model');

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({
      username: username,
    });
    if (!account) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Tài khoản hoặc mật khẩu không đúng!',
      });
    }

    //kiểm tra password
    let checkPass = bcryptjs.compareSync(password, account.password);
    if (!checkPass) {
      return res.status(400).json({
        statusCode: 400,
        message: 'Tài khoản hoặc mật khẩu không đúng!',
      });
    }

    //jwt

    return res.status(200).json({
      statusCode: 200,
      message: 'Đăng nhập thành công!',
    });
  },
  register: async (req, res) => {
    const body = req.body;
    const newAccount = await accountModel.create(body);
    return res.status(201).json(newAccount);
  },
};
