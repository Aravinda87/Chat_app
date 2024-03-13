const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
},
    {
        timestamp : true
    }
);

const user = mongoose.Model("user",userModel);
module.exports = user;