import mongoose from "mongoose";
import validator from "validator";

const jobSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      required: [true, "Please specify the job position"],
      maxLength: [100, "Position cannot be bigger that 30 symbols"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Please specify the company"],
      maxLength: [50, "Position cannot be bigger that 30 symbols"],
      trim: true,
    },
    jobLocation: {
      type: String,
      required: [true, "Please specify the location"],
      maxLength: [20, "Location can contain no more than 20 letters"],
      trim: true,
    },
    jobStatus: {
      type: String,
      enum: ["pending", "interview", "declined"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["part-time", "full-time", "remote", "hybrid"],
      default: "full-time",
    },
    recruiter: {
      type: String,
      maxLength: [30, "The recruiter's name cannot be bigger that 30 symbols"],
      trim: true,
    },
    recruiterEmail: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "Incorrect email",
      },
      trim: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "UserModel",
      required: [true, "Please provide the user associated with this job"],
    },
  },
  { timestamps: true } // provides "createdAt" and "updatedAt" fields automatically
);

const JobModel = mongoose.model("JobModel", jobSchema);

export default JobModel;
