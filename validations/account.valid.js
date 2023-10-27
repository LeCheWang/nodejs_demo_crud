const Joi = require('joi');

const accountSchemaValid = Joi.object({
  username: Joi.string()
    .min(6)
    .message('Username không được dưới 6 ký tự')
    .max(30)
    .message('Username không được quá 30 ký tự')
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      ),
    )
    .message(
      'Password tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số',
    ),
  phone: Joi.string().min(10).max(12).required(),
});

module.exports = (account) => accountSchemaValid.validate(account);
