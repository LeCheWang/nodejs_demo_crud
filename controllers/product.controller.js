const productModel = require("../models/product.model");

module.exports = {
    createproduct: async(req, res) =>{
        const product_id = req.params.product_id;
        const body = req.body;
        const newproduct = await productModel.create(body);
        return res.status(201).json(newproduct);
    },
    getProducts: async (req, res) => {
        const categories = await productModel.find();
        return res.status(200).json(categories);
    }
}