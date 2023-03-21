import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import JobModel from "../models/jobModel.js";
import { BadRequestError } from "../errors/index.js";
import checkPermissions from "../utils/checkPermissions.js";

const getJobs = async (req, res, next) => {
  const { search, jobType, jobStatus, sort } = req.query;
  const queryObject = { createdBy: req.user.userId };

  // Search
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  // Filtering by the jobType
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  // Filtering by the jobStatus
  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
  }

  let result = JobModel.find(queryObject);

  // Sorting
  if (sort === "latest") {
    result = result.sort("-createdAt");
  }

  if (sort === "oldest") {
    result = result.sort("createdAt");
  }

  if (sort === "a-z") {
    result = result.sort("position");
  }

  if (sort === "z-a") {
    result = result.sort("-position");
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await JobModel.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({
    status: "success",
    totalJobs: jobs.length,
    numOfPages,
    jobs,
  });
};

const addJob = async (req, res, next) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide position and company!");
  }

  // Adding the user to the req.body
  req.body.createdBy = req.user.userId;

  const job = await JobModel.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: "success",
    job,
  });
};

const editJob = async (req, res, next) => {
  const { company, position } = req.body;
  if (!company || !position) {
    throw new BadRequestError("Please provide position and company!");
  }

  const job = await JobModel.findOne({ _id: req.params.id });
  if (!job) {
    throw new BadRequestError(`There's no job with the id: ${req.params.id}`);
  }

  // Checking the current user permittions for editing the job:
  checkPermissions(req.user, job.createdBy);

  const updatedJob = await JobModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(StatusCodes.OK).json({
    status: "success",
    updatedJob,
  });
};

const deleteJob = async (req, res, next) => {
  const job = await JobModel.findOne({ _id: req.params.id });
  if (!job) {
    throw new BadRequestError(`There's no job with the id: ${req.params.id}`);
  }

  checkPermissions(req.user, job.createdBy);

  await JobModel.findOneAndDelete({ _id: req.params.id });

  res.status(StatusCodes.OK).json({
    status: "success",
    message: "The job has been deleted!",
  });
};

const getStats = async (req, res, next) => {
  let stats = await JobModel.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  // Changing the ststa format from array to object
  stats = stats.reduce((acc, current) => {
    const { _id, count } = current;
    acc[_id] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  res.status(StatusCodes.OK).json({
    status: 'success',
    defaultStats,
  });
};

export { getJobs, addJob, editJob, deleteJob, getStats };
