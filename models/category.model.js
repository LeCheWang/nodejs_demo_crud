const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    name: String,
    img: String,
  },
  {
    versionKey: false,
    timestamps: false,
  },
);

module.exports = mongoose.model('category', categorySchema);
