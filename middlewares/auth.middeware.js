require("dotenv").config();
const jwt = require("jsonwebtoken");
const accountModel = require("../models/account.model");
const ErrorResponse = require("../helpers/ErrorResponse");

module.exports = async (req, res, next) => { 
    const {authorization} = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')){
        throw new ErrorResponse(401, "Token không hợp lệ");
    }
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    const account = await accountModel.findById(decode._id);

    if (!account){
        throw new ErrorResponse(401, "Tài khoản không tồn tại");
    }
    req.account = account;
    next();
};