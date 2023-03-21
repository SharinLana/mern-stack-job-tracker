import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userModel.js";
import { BadRequestError, UnauthorizedError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError("Please provide your first and last name, email and password");
  }

  // Checking for the duplicate email
  const userAlreadyExists = await UserModel.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("This email is already in use");
  }

  const user = await UserModel.create(req.body);

  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    status: "success",
    token,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.userLocation,
      email: user.email,
    },
    userLocation: user.userLocation,
  });
};

const login = async (req, res, next) => {
  const {email, password} = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide your email and password")
  }

  const user = await UserModel.findOne({email}).select("+password");

  const token = user.createJWT();
  user.password = undefined;

  res.status(StatusCodes.OK).json({
    status: "success",
    token,
    user,
    location: user.userLocation
  })
};

const updateUser = async (req, res, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };
