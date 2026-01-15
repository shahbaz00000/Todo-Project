const mongoose = require("mongoose");

const todoListSchema = new mongoose.Schema({
    title:{
        type:String,
        rquired:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","completed"]
    },
    priority:{
        type:String,
        enum:["low","medium","high"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const Todo = mongoose.model("Todo",todoListSchema);
module.exports = Todo