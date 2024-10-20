//import mongoose
const mongoose = require("mongoose");


// KONSI post pr comment kr rhe ho,kis user ne comment kiya hn , kya comment kiya hn

//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);