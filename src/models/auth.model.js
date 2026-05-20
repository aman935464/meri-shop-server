import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6, 
  },
  role: {
    type: String,
    enum: ["user","admin"],
    default: "user"
  },
  profilePic: {
    type: String,
    default: ""
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  refreshToken: {
    type: String
  }
},
  {
    timestamps: true
  }
)


const User = mongoose.model("User",userSchema)
export default User;