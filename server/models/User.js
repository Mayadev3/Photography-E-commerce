import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },

    city: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    zipCode: {
      type: String,
      // required: true,
    },
    phoneNumber: {
      type: String,
      // required: true,
    },
    subscription: {
      type: Boolean,
    },
    admin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
