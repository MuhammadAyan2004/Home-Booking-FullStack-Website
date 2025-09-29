const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
    houseName:{type:String, required:true},
    location:{type:String, required:true},
    price:{type:Number, required:true},
    rating:{type:String, required:true},
    pic:String,
    description:String
})

module.exports = mongoose.model('userHome',homeSchema)