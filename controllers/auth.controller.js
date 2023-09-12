require('dotenv').config();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const accountModel = require('../models/account.model');
const accountValid = require('../validation/account.valid');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = {
  register: async (req, res) => {
    const body = req.body;
    const { error, value } = accountValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const newAccount = await accountModel.create(body);
    return res.status(201).json(newAccount);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({
      username: username,
    });
    if (!account) {
      //   return res.status(401).json({
      //     statusCode: 401,
      //     message: 'TK hoặc MK k đúng',
      //   });
      throw new ErrorResponse(401, 'TK hoặc MK k đúng');
    }
    //kiem tra mk
    const checkPass = bcryptjs.compareSync(password, account.password);

    if (!checkPass) {
      //   return res.status(401).json({
      //     statusCode: 401,
      //     message: 'TK hoặc MK k đúng',
      //   });
      throw new ErrorResponse(401, 'TK hoặc MK k đúng');
    }

    //tạo ra chuỗi jwt
    const payload = {
      _id: account._id,
      username: account.username,
      role: account.role,
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY);

    return res.status(200).json({
      _id: account._id,
      username: account.username,
      jwt: token,
    });
  },
};
