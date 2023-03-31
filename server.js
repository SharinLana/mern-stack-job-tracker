import path, { dirname } from "path";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

import "express-async-errors";
import morgan from "morgan";

// Secirity packages
// import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import cookieParser from "cookie-parser";

// Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set("trust proxy", 1); //! for rateLimiter and COOKIES, to enable it when behind the reverse proxy (Heroku, Bluemix, etc)
// The rateLimiter is used in the jobRoutes.js

// Importing routes
import authRoutes from "./routes/auth-routes.js";
import jobRoutes from "./routes/job-routes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import authVerification from "./middleware/auth.js";
import { fileURLToPath } from "url";

const port = process.env.PORT || 9000;

// Activate morgan
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
// only when ready to deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

// Security middleware
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

// Route middleware
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", authVerification, jobRoutes);
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("MONGODB connected!"))
      .catch((err) => console.log(err));

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
