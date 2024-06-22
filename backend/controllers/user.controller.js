import User from "../models/user.model.js";

export const getUsersForSideBar = async (req,res)=>{

try {
    const  loggedInuserId = req.user._id;
    const filteredUsers = await User.find({_id : {$ne : loggedInuserId }}).select("-password") //get the users except the loggedin user 

    res.status(200).json(filteredUsers);
} catch (error) {
    console.log("error in user controller");
    res.status(500).json({error : "internal server error", error}) 
}
}
