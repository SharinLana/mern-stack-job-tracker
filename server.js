import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

// Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Importing routes
import authRoutes from "./routes/auth-routes.js";
import jobRoutes from "./routes/job-routes.js";

const port = process.env.PORT || 4000;

// Route middleware
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
