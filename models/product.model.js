const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    //cac thuoc tinh khac
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    }
}, {
    versionKey: false, 
    timestamps: true
});

module.exports = mongoose.model("product", productSchema)