const accountModel = require('../models/account.model');

module.exports = {
  getAccounts: async (req, res) => {
    let accounts = await accountModel.find();
    return res.status(200).json(accounts);
  },
};
