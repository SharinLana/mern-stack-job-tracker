import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return; // do not hash the password again if the user changed his/her data

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

userSchema.methods.comparePasswords = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

const UserModel = mongoose.model("UserModel", userSchema);

export default UserModel;
