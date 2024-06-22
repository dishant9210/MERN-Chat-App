import mongoose from "mongoose";

const conversationSchema  = mongoose.Schema({

    participants : [{type : mongoose.Schema.Types.ObjectId, ref : "User", required : true}],
    messages : [{type: mongoose.Schema.Types.ObjectId , ref : "Message",required : true}],

},{timestamps : true})

const conversation = mongoose.model("conversation", conversationSchema);

export default conversation;