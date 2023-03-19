import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your first name"],
    minLength: [2, "The first name cannot be less than 2 characters"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
    minLength: [2, "The last name cannot be less than 2 characters"],
    trim: true,
  },
  userLocation: {
    type: String,
    trim: true,
    default: "My city",
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: {
      validator: validator.isEmail,
      message: "Incorrect email",
    },
    unique: [true, "This email is already in use. Please choose another one"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please create your password"],
    minLength: [6, "Password must contain at least 6 symbols"],
    trim: true,
    select: false,
  },
});

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
