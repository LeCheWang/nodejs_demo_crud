const mongoose = require('mongoose');

const productSchame = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      requried: true,
    },
    description: {
      type: String,
      requried: true,
    },
    quantity: {
      type: Number,
      requried: true,
    },
    category_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'category',
    },
  },
  {
    versionKey: false,
    timestamps: false,
  },
);

module.exports = mongoose.model('product', productSchame);
