import mongoose, { Types } from "mongoose";
const userSchema = new mongoose.Schema({
    fullName :{
        type : String,
        required : true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6
      },
      gender : {
        type: String,
        required : true,
        enum: ["male", "female"],
      },
      profilePic: {
        type : String,
        default : ""
      }
},{timestamps : true})// createdat and updatedAt
const user = mongoose.model("User", userSchema);
export default user;