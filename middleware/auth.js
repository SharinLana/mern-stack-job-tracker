import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthorizedError("Authentication invalid!");
  }

  // const authHeader = req.headers.authorization;
  // if (!authHeader || !authHeader.startsWith("Bearer ")) {
  //   throw new UnauthorizedError("Authentication invalid!");
  // }

  // const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // TEST USER!
    const testUser = payload.userId === "6420b6c2e1641997687bfb3f";
    // TEST USER!
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (err) {
    console.log(err);
    throw new UnauthorizedError("Authentication Invalid");
  }
};

export default auth;
