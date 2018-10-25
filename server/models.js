const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Authors',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));

const Authors = new mongoose.Schema({
    Author: {
        type: String,
        minlength: [3, "Author's name must be longer than 3 letters"],
        required: [true, "Author's name must have more than 3 characters"]},
    Quote: {
        type:String,
        minlength: [3, "Quotes must be longer than 3 letters"],
        required: [true, "Quotes must be longer than 3 letters"]},   
    },
    {timestamps:true})


module.exports = mongoose.model("Authors", Authors);