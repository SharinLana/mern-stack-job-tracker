import { StatusCodes } from "http-status-codes";

const NotFound = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).send("Page Not Found");
};

export default NotFound;
