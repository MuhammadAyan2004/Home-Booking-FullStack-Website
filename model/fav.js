const mongoose = require("mongoose");

const fav = new mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'homes',
        required:true
    }
})

module.exports = mongoose.model('favorite',fav)