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

  res.status(StatusCodes.OK).json({
    status: "success",
    totalJobs: jobs.length,
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
  res.send("Stats");
};

export { getJobs, addJob, editJob, deleteJob, getStats };
