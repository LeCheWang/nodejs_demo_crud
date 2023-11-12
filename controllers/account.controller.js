const accountModel = require('../models/account.model');
const write2pdf = require('../write2pdf');

module.exports = {
  getAccounts: async (req, res) => {
    let accounts = await accountModel.find();
    return res.status(200).json(accounts);
  },
  writePdfFile: async (req, res) => {
    await write2pdf(req.file.path);
    return res.send("ok")
  },
};
