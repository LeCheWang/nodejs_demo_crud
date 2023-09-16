const Joi = require('joi');

const accountSchemaValid = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(6)
    .message('username phải từ 6 ký tự')
    .max(10)
    .message('username tối đa 10 ký tự')
    .required(),
  password: Joi.string().required(),
  fullname: Joi.string().min(8).max(50).required(),
  dob: Joi.string().required(),
  phone: Joi.string().min(10).max(12).required(),
});

function accountValid(account) {
  return accountSchemaValid.validate(account);
}

module.exports = accountValid;
