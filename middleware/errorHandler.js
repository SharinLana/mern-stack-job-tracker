import { StatusCodes } from "http-status-codes";
import { CustomError } from "../errors/index.js";

const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong. Try again later",
  };

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // Missing field error
  if (err.name === "ValidationError") {
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Duplicate value error
  if (err.name === "11000") {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field. Please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // Cast error
  if (err.name === "CastError") {
    customError.message = `No item found with the id: ${err.value}`;
    customError.statusCode = 404;
  }

  res.status(customError.statusCode).json({ message: customError.message });
};

export default errorHandler;
