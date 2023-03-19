import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

// Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.port || 4000;

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
