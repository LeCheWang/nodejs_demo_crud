const accountModel = require("../models/account.model")

module.exports = {
    createAccount: async (req, res) => {
        const body = req.body;
        console.log(body);
        const newAccount = await accountModel.create(body);
        return res.status(200).json(newAccount);
    }
} 