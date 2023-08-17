const mongoose = require("mongoose")

async function connectDB(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/demo_crud")
        console.log("Connect db success");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;