const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const accountSchame = mongoose.Schema(
  {
    username: {
      type: String,
      requried: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      requried: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

//xóa password khi trả về json
accountSchame.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.password;
  },
});


//mã hóa mật khẩu trước khi lưu
accountSchame.pre('save', function (next) {
  const account = this;
  if (account.password) {
    //mã hóa mật khẩu
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  next();
});

//mã hóa mật khẩu trước khi update
accountSchame.pre('findByIdAndUpdate', function (next) {
  const account = this.getUpdate();
  if (account.password) {
    //mã hóa mật khẩu
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

accountSchame.pre('findOneAndUpdate', function (next) {
  const account = this.getUpdate();
  if (account.password) {
    //mã hóa mật khẩu
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

module.exports = mongoose.model('account', accountSchame);
//table - collection
