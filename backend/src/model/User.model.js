import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
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
    },
    role : {
      type: String,
      enum: ["user", "host", "admin"],
      default: "user"
    }, 
    country : {
      type: String,
      default : "India",
      trim : true,
    }
    
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("User", UserSchema);
export default User;
