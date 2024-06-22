import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
   try {
    const {id : receiverId} = req.params;
    const {message} = req.body;
    const senderId = req.user._id; // the id saved in the cookie
    let conversation = await Conversation.findOne({
        participants :{ $all :[receiverId,senderId]},
    })
    if(!conversation){
        conversation = await Conversation.create({
            participants : [receiverId,senderId]
        })
    }
    const newMessage = new Message({
        receiverId : receiverId,
        senderId : senderId,
        message: message
    })
    // await newMessage.save()

    if(newMessage){
        conversation.messages.push(newMessage._id);
    //   await  conversation.save();
    }
    await Promise.all[newMessage.save(),conversation.save()];// this will execute both lines of code parallely

    res.status(201).json({newMessage});
   } catch (error) {
    console.log("error in sendMessage controller");
    res.status(500).json({error : "internal server error", error})
   }
}

export const getMessage = async (req,res)=>{
    try {
        const {id :userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,userToChatId]}
        }).populate("messages");// The messages field in the conversation document would be replaced with the actual message documents:

        if(!conversation){
            res.status(200).json([]);
        }
        const messages = conversation.messages
        res.status(200).json(messages)
        
    } catch (error) {
        console.log("error in getMessage controller");
     res.status(500).json({error : "internal server error", error})
    }
}