const express = require("express")
const app = express()

//giúp mình nhận được body json từ client
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = require("./router")

router(app);

app.listen(5000, ()=>{
    console.log("server run at port 5000");
})