const categoryModel = require('../models/category.model');

module.exports = {
  getCategories: async (req, res) => {
    const categories = await categoryModel.find();
    return res.status(200).json(categories);
  },
  createCategory: async (req, res) => {
    const body = req.body;
    const file = req.file;
    console.log(body);
    console.log(file);
  },
};
