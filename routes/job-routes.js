import express from "express";
import {
  getJobs,
  addJob,
  editJob,
  deleteJob,
  getStats,
} from "../controllers/job-controllers.js";
import testUser from "../middleware/testUser.js";

const router = express.Router();

router.route("/").get(getJobs).post(testUser, addJob);
router.route("/stats").get(getStats);
router.route("/:id").patch(testUser,editJob).delete(testUser, deleteJob);

export default router;
