const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
        trim: true
    },
    type:{
        type: String,
        require: true,
        trim: true
    }
});

const channelModel = mongoose.model('Channel', channelSchema)
module.exports = channelModel