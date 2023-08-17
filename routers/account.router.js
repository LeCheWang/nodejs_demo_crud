const express = require("express")
const router = express.Router()

const {
    createAccount
} = require("../controllers/account.controller")

router
    .route("/")
    .post(createAccount);

module.exports = router;