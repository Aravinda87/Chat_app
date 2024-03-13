const mongoose = require('mongoose')

const chatModel = mongoose.Schema({
    chatName : {type : string },
    isGroupchat : {type : Boolean},
    users : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    groupadmin : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    lastmessage : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "message"
    }
},
{
    timestamp : true
}
);

const chat = mongoose.Model("Chat",chatModel);
module.exports = chat;
