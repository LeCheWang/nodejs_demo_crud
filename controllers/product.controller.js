const productModel = require('../models/product.model');

module.exports = {
  createProduct: async (req, res) => {
    const category_id = req.params.category_id;
    const body = req.body;
    body.category = category_id;
    const newproduct = await productModel.create(body);
    return res.status(201).json(newproduct);
  },
  getProducts: async (req, res) => {
    const category_id = req.params.category_id;
    const categories = await productModel.find({
      category: category_id,
    });
    return res.status(200).json(categories);
  },
};
