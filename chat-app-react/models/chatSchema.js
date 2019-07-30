const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    username: {
        type: String, 
        required: true
    }, 
    message: {
        type: String, 
    }, 
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    }
})

module.exports = mongoose.model("Chat", chatSchema);