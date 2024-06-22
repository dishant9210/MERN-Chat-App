import mongoose from "mongoose";
const connectToMongoDB = async ()=>{
    try {
        await  mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to mongoDB");

    } catch (error) {
        console.log("error connecting to mongo db" ,error.message)
    }
}
export default connectToMongoDB;
