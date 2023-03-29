import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userModel.js";
import { BadRequestError, UnauthorizedError } from "../errors/index.js";
import attachCookie from "../utils/attachCookies.js";

const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError(
      "Please provide your first and last name, email and password"
    );
  }

  // Checking for the duplicate email
  const userAlreadyExists = await UserModel.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("This email is already in use");
  }

  const user = await UserModel.create(req.body);

  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.CREATED).json({
    status: "success",
    // token,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      userLocation: user.userLocation,
      email: user.email,
    },
    userLocation: user.userLocation,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide your email and password");
  }

  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthorizedError("Authentication failed!");
  }

  // Comparing the user's original and current password
  const passwordIsCorrect = await user.comparePasswords(password);
  if (!passwordIsCorrect) {
    throw new UnauthorizedError("Incorrect password!");
  }

  const token = user.createJWT();
  user.password = undefined;

  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({
    status: "success",
    // token,
    user,
    userLocation: user.userLocation,
  });
};

const updateUser = async (req, res, next) => {
  const { firstName, lastName, userLocation, email } = req.body;

  if (!firstName || !lastName || !email) {
    throw new BadRequestError(
      "Please provide your first and last name, email and password"
    );
  }

  const user = await UserModel.findOne({ _id: req.user.userId });

  user.firstName = firstName;
  user.lastName = lastName;
  user.userLocation = userLocation;
  user.email = email;

  await user.save();

  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({
    status: "success",
    // token,
    user,
    userLocation: user.userLocation,
  });
};

// Getting the current user to prevent losing his token on the page reload
const getCurrentUser = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.user.userId });

  res.status(StatusCodes.OK).json({
    status: "success",
    user,
    userLocation: user.userLocation,
  });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });

  res.status(StatusCodes.OK).json({ message: "User logged out!" });
};

export { register, login, updateUser, getCurrentUser, logout };
