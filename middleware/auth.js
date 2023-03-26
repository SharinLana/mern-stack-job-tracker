import jwt from "jsonwebtoken";
import { UnauthorizedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("Authentication invalid!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // TEST USER!
    const testUser = payload.userId === "testUserId";
    // TEST USER!
    req.user = { userId: payload.userId, name: payload.name, testUser };
    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;
