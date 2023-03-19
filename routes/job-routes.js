import express from "express";
import {
  getJobs,
  addJob,
  getSingleJob,
  editJob,
  deleteJob,
  getStats,
} from "../controllers/job-controllers.js";

const router = express.Router();

router.route("/").get(getJobs).post(addJob);
router.route("/stats").get(getStats);
router.route("/:id").get(getSingleJob).patch(editJob).delete(deleteJob);


export default router;
