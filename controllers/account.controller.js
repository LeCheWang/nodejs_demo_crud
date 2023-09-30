const accountModel = require('../models/account.model');
const accountValid = require('../validations/account.valid');

module.exports = {
  createAccount: async (req, res) => {
    const body = req.body;
    const { error, value } = accountValid(body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        message: error.message,
      });
    }
    const newAccount = await accountModel.create(body);
    return res.status(200).json(newAccount);
  },
  getAccounts: async (req, res) => {
    const fullName = req.query.fullName;
    const username = req.query.username;
    const role = req.query.role || 'user';

    const bodyQuery = {
      role: role,
    };

    if (fullName) {
      bodyQuery.fullname = {
        $regex: '.*' + fullName + '.*',
      };
    }

    if (username) {
      bodyQuery.username = {
        $regex: '.*' + username + '.*',
      };
    }

    const accounts = await accountModel.find(bodyQuery);
    return res.status(200).json(accounts);
  },
  updateAccount: async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    const updatedAccount = await accountModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json(updatedAccount);
  },
  deleteAccount: async (req, res) => {
    const id = req.params.id;
    const deletedAccount = await accountModel.findByIdAndDelete(id);
    return res.status(200).json(deletedAccount);
  },
};
