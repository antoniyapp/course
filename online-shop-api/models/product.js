const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required:true,
        trim:[true,"Title is required"]
    },
    imagePath: {
        type: String,
        required:[true,"Image is required"]
    },
    description:{
        type : String,
    },
    price:{
        type:Number,
        required:[true,"Price is required"]
    }
  }
)

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;