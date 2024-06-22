import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../uitils/genrateToken.js";

//signup function
export const signupUser = async(req,res)=>{

    try {
const {fullName,username,password,confirmPassword,gender}= req.body;
    if(password != confirmPassword){
        return res.status(400).json({error: "the password does not match"});
    }
    const user = await User.findOne({username});
    if(user){
        return res.status(400).json({error: "user already exists"}); 
    }
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);


    //random avater
    const malePic = "https://xsgames.co/randomusers/avatar.php?g=male";
    const femalePic = "https://xsgames.co/randomusers/avatar.php?g=female";
   

    //making an obeject to be inserted in the User table 
    const newUser = new User({
        fullName : fullName,
        username : username,
        password : hash,
        gender : gender,
        profilePic : gender === "male" ? malePic: femalePic
    })
    if(newUser){
    //generating JWT JSON web token

    await generateToken(newUser._id,res);
   await newUser.save();// saving the user in the user table in DB

   res.status(201).json({
    _id : newUser._id,
    fullName : newUser.fullName,
    username : newUser.username,
    password : newUser.password,
    gender : newUser.gender,
    profilePic : newUser.profilePic

   })}
   else{
    res.status(400).json({message : "invalid user data"})
   }
} catch (error) {
    console.log(" error in the signup controler",error.message);
        res.status(500).json({
            error: "Internal server Error"
        })
    }

    
}

export const loginUser = async (req,res)=>{
    try {
       const {username,password} =  req.body;
       const user  = await User.findOne({username}); // find the entry in the user modle or table with username .
       const isPasswordCorrect = bcrypt.compare(password,user?.password || "");
       if(!user || !isPasswordCorrect){
        res.status(400).json({error : "Invalid password or username"});
       }
       generateToken(user._id,res);

       // if every thing went well 
       res.status(200).json({
        _id : user._id,
        fullName : user.fullName,
        gender : user.gender,
        profilePic: user.profilePic
       })

    } catch (error) {
        console.log(error , "error in the login controler");
        res.status(500).json({
            error: "Internal server Error"
        })
    }
}

export const logoutUser = (req,res)=>{
    try {
       res.cookie("jwt","",{maxAge : 0});
       res.status(200).json({message: "Logged Out Succesfully"});
    } catch (error) {
        console.log(" error in the logout controler",error.message);
        res.status(500).json({
            error: "Internal server Error"
        })  
    }
}
