const Joi = require('joi');

const schemaValidAccount = Joi.object({
  username: Joi.string()
    .min(6)
    .message('username phải trên 6 ký tự')
    .max(16)
    .message('username phải dưới 16 ký tự')
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
      ),
    )
    .required(),
  fullname: Joi.string().min(6).max(50).required(),
  dob: Joi.string().required(),
  phone: Joi.string().min(10).max(12).required(),
});

module.exports = (account) => schemaValidAccount.validate(account);
