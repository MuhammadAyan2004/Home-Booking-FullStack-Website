const mongoose = require("mongoose");

const fav = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userHome',
        required:true
    }
})

module.exports = mongoose.model('favorite',fav)