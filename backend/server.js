import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/users.routes.js"
import connectToMongoDB from "./db/connectingToMongoDB.js";
import cors from "cors";

//variables//app intialisation
const app = express();

dotenv.config();//to be able to use process.env 

const PORT = process.env.PORT|| 8000;


//middleware
app.use(express.json());// to parse the incoming requests with json payload
app.use(cookieParser());// to parse the incoming cookie for verification
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    credentials: true
}));//to allow cross origin domain requestes


app.use("/api/auth/",authRoutes);//for all the auth routes
app.use("/api/messages/",messageRoutes);//for all the message routes
app.use("/api/user/",userRoutes)// to get the user for the side bar




app.get("/", (req,res)=>{
    //root route
    res.send("hello world");
})





app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`the server is running at port ${PORT}`);
})