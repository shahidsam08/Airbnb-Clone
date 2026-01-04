import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    phone:  {
      type: String,
      required: true,
      trim: true
    }, 
    name : {
      type : String, 
      required : true,
      trim : true
    }
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("User", UserSchema);
export default User;
