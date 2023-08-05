const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema= new Schema({
    
    items: {type: Object, required: true},
    Contactno:{type:String, required: true},
    Name:{type:String, required:true},
    Tableno:{type:String, required:true},
    payment : {type:String, default: 'COD'},
    status: {type:String, default: 'order_placed'}

},{timestamps : true})

module.exports = mongoose.model('Order', orderSchema)