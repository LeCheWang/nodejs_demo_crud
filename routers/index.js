const accountRouter = require("./account.router")
const categoryRouter = require("./category.router")

module.exports = (app) =>{
    app.use("/api/accounts", accountRouter)
    app.use("/api/categories", categoryRouter)
}