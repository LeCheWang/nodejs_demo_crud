const mongoose = require('mongoose');

const commentSchame = mongoose.Schema(
  {
    content: {
      type: String,
      requried: true,
    },
    account_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'account',
    },
    product_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'product',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('comment', commentSchame);
