const Category = require('../models/category.model');

module.exports = {
  createCategory: async (req, res) => {
    const body = req.body;
    body.img = '/images/' + req.file.filename;
    const newCate = await Category.create(body);
    return res.status(201).json(newCate);
  },
  getCategories: async (req, res) => {
    const categories = await Category.find();
    return res.status(200).json(categories);
  },
};
