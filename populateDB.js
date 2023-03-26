import { readFile } from "fs/promises";
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

import dotenv from "dotenv";
dotenv.config();

import JobModel from "./models/jobModel.js";

const populate = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log("MONGODB CONNECTED!"))
      .catch((err) => console.log(err));

    // await JobModel.deleteMany();

    const jsonJobs = JSON.parse(
      await readFile(new URL("./jobs-data.json", import.meta.url))
    );
    await JobModel.create(jsonJobs);
    console.log("Success!!! 👍🏻");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

populate();
// Then run "node populateDB.js" to fill the DB with jobs