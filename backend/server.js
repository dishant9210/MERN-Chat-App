import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/users.routes.js"
import connectToMongoDB from "./db/connectingToMongoDB.js";
import cors from "cors";
import {httpServer,app } from "./socket/socket.js"
import path  from 'path'
 
dotenv.config();//to be able to use process.env 

const PORT = process.env.PORT|| 8000;


//middleware
app.use(express.json());// to parse the incoming requests with json payload
app.use(cookieParser());// to parse the incoming cookie for verification
app.use(cors({
    origin: 'https://mern-chat-app-kohv.onrender.com', // Replace with your frontend's URL
    credentials: true
}));//to allow cross origin domain requestes

const __dirname = path.resolve();


app.use("/api/auth/",authRoutes);//for all the auth routes
app.use("/api/messages/",messageRoutes);//for all the message routes
app.use("/api/user/",userRoutes)// to get the user for the side bar

app.use(express.static(path.join(__dirname,"/frontend/dist")))



app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist", "index.html"))
})





httpServer.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`the httpServer is running at port ${PORT}`);
})