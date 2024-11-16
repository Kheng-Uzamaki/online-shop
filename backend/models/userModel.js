import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema } = mongoose; // Destructure Schema from mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false, // `required: true` is unnecessary since a default value is provided
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};
const User = mongoose.model("User", userSchema);

export default User;
