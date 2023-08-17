const express = require("express");
const app = express();
const connectDb = require("./configs/database");
const router = require("./routers");

app.use(express.json())

connectDb();
//cac api
router(app);


app.listen(5000, ()=>{
    console.log("Server run at port " + 5000);
})