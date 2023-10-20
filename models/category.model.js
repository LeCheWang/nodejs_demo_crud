const mongoose = require('mongoose');

const categorySchame = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  },
);

module.exports = mongoose.model('category', categorySchame);
