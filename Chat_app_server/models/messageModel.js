const mongoose = require('mongoose')

const messageModel = mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    receiver : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    chat : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "chat"
    }
},
{
    timestamp : true
}
);

const message = mongoose.Model("message",messageModel);
module.exports = message;