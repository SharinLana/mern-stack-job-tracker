import { StatusCodes } from "http-status-codes";
import JobModel from "../models/jobModel.js";

const getJobs = async (req, res, next) => {
  const jobs = await JobModel.find({ createdBy: req.user.userId });

  res.send(StatusCodes.OK).json({
    status: "success",
    totalJobs: jobs.length,
    jobs,
  });
};

const addJob = async (req, res, next) => {
  res.send("Add job");
};

const getSingleJob = async (req, res, next) => {
  res.send("A job");
};

const editJob = async (req, res, next) => {
  res.send("Edit job");
};

const deleteJob = async (req, res, next) => {
  res.send("Delete job");
};

const getStats = async (req, res, next) => {
  res.send("Stats");
};

export { getJobs, addJob, getSingleJob, editJob, deleteJob, getStats };
