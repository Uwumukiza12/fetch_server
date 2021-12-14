const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    Districts:{
        type: String,
        required:true
    },
    Sectors:{
        type: String,
        required: true
    },
    cells:{
        type:String,
        required: true
    },
    fullname:{
        type:String,
        required: true
    },
    street:{
        type:String,
        required: true
    },
    gate:{
        type:String,
        required: true
    },
    numberOfJercan:{
        type:String,
        required:true
    },
    status:{
        type: String,
        required: true,
        default: "Pending",
        enum: ["Pending", "Accepted", "Rejected"]
    },

    date: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('posts', PostSchema); 