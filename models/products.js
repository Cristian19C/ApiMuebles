const mongoose = require('mongoose')
const {Schema} = mongoose;
const ProductsSchema = new Schema ({
    id_product:{
        type : String,
        required : true,
        unique : true
    },

    name: {
        type : String,
        required : true,
    }, 

    price: {
        type : String,
        required : true
    },

    description: {
        type : String,
        required : true
    },

    category : {
        type: String,
        required : true
    },

    image: {
        type : String,
        required : true
    }
})


module.exports = mongoose.model('products', ProductsSchema)