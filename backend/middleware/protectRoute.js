// this file is used to autherize a user before he can send a message 
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt// getting a hold of the cookie which we created previously
    
        if(!token){
            res.status(401).json({error : "Unauthorized - No token provided "})
        }
    
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        if(!decoded){
            res.status(401).json({error : "Unauthorized - Invalid token provided "})    
        }
        const user = await User.findById(decoded.userId);
        if(!user){
            res.status(500).json({error : "User not found"});
        }
    
        req.user = user;
        
        next(); // calling the sendMessage function 
    } catch (error) {
        console.log("Error in the protectRoute middleware", error);
        res.status(500).json({error: "Internal server error"});
    }
}

export default protectRoute;