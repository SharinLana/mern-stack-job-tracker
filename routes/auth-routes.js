import express from "express";
import rateLimiter from "express-rate-limit";
import {
  register,
  login,
  updateUser,
} from "../controllers/auth-controllers.js";

const router = express.Router();
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP requests per windowMS
  message:
    "Too many requests from this IP address. Please try again in 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(updateUser);

export default router;
