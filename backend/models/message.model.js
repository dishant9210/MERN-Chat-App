import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId : {
    type : mongoose.Schema.Types.ObjectId,ref : "User",required : true,},
    receiverId : {type : mongoose.Schema.Types.ObjectId, ref : "User",  required : true,},
    message : {
        type : String,
        required : true
    }
},{timestamps : true}) //this adds the created at and updated at fields

const Message = mongoose.model("Message", messageSchema);

export default Message;