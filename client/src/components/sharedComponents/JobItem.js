import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import {
  MdOutlineAlternateEmail,
  MdOutlineAttachMoney,
  MdOutlineSchedule,
} from "react-icons/md";
import JobInfo from "./JobInfo";
import { useAppContext } from "../../context/appContext";

const JobItem = ({
  _id,
  company,
  position,
  jobLocation,
  recruiter,
  recruiterEmail,
  salaryMin,
  salaryMax,
  jobType,
  jobStatus,
  interviewScheduledAt,
  createdAt,
  isLoading,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  let dateOfCreation = moment(createdAt).format("MMM Do, YYYY");
  let interviewDate = moment(interviewScheduledAt).format("MMM Do, YYYY");

  return (
    <div className="job-container">
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info-container">
          <h5 className="position">{position}</h5>
          <p className="company">{company}</p>
        </div>
      </header>

      <div className="job-middle-container">
        <JobInfo icon={<FaLocationArrow size={19} />} text={jobLocation} />
        <JobInfo icon={<FaBriefcase size={19} />} text={jobType} />
        <JobInfo icon={<FaCalendarAlt size={19} />} text={dateOfCreation} />
        <JobInfo
          icon={<MdOutlineAttachMoney size={23} />}
          text={`${salaryMin} - ${salaryMax}`}
        />
        <JobInfo icon={<BsPerson size={23} />} text={recruiter} />
        <JobInfo
          icon={<MdOutlineAlternateEmail size={23} />}
          text={recruiterEmail}
        />
        {interviewScheduledAt && (
          <JobInfo
            icon={<MdOutlineSchedule size={23} />}
            text={interviewDate}
          />
        )}
        <div className={`status ${jobStatus}`}>{jobStatus}</div>
      </div>

      <footer>
        <Link
          to="/add-job"
          className="btn edit-btn"
          disabled={isLoading}
          onClick={() => setEditJob(true, _id)}
        >
          Edit
        </Link>
        <button
          type="button"
          className="btn delete-btn"
          disabled={isLoading}
          onClick={() => deleteJob(_id)}
        >
          Delete
        </button>
      </footer>
    </div>
  );
};

export default JobItem;
