const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    versionKey: false,
  },
);

accountSchema.pre('save', function (next) {
  const account = this;
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  next();
});

accountSchema.pre('findOneAndUpdate', function (next) {
  const account = { ...this.getUpdate() };
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

accountSchema.pre('findByIdAndUpdate', function (next) {
  const account = { ...this.getUpdate() };
  if (account.password) {
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  this.setUpdate(account);
  next();
});

accountSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.password;
  },
});

module.exports = mongoose.model('account', accountSchema);
