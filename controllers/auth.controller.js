require("dotenv").config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const accountModel = require('../models/account.model');
const accountValid = require('../validations/account.valid');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({
      username: username,
    });
    if (!account) {
      // return res.status(400).json({
      //   statusCode: 400,
      //   message: 'Tài khoản hoặc mật khẩu không đúng!',
      // });
      throw new ErrorResponse(400, 'Tài khoản hoặc mật khẩu không đúng!');
    }

    //kiểm tra password
    let checkPass = bcryptjs.compareSync(password, account.password);
    if (!checkPass) {
      // return res.status(400).json({
      //   statusCode: 400,
      //   message: 'Tài khoản hoặc mật khẩu không đúng!',
      // });
      throw new ErrorResponse(400, 'Tài khoản hoặc mật khẩu không đúng!');
    }

    //jwt
    const payload = {
      _id: account._id,
      username: account.username,
      role: account.role,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '15m',
    });

    return res.status(200).json({
      ...payload,
      token: token,
    });
  },
  register: async (req, res) => {
    const body = req.body;
    const { value, error } = accountValid(body);
    if (error) {
      // return res.status(400).json({
      //   statusCode: 400,
      //   message: error.message,
      // });
      throw new ErrorResponse(400, error.message);
    }

    const newAccount = await accountModel.create(body);
    return res.status(201).json(newAccount);
  },
};
