import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userModel.js";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    throw new BadRequestError();
  }

  const user = await UserModel.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: "success",
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
  res.send("Login");
};

const updateUser = async (req, res, next) => {
  res.send("updateUser");
};

export { register, login, updateUser };
