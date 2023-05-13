const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const productSchema = new Schema ({
    Id: {type:Number, required:true, unique:true},
    Name: {type:String, required:true},
    Image: {type:String},
    Stock: {type:Number, required:true},
    Categorie: {type:String, required:true}
})

const Product = model("Products", productSchema);

module.exports = Product;