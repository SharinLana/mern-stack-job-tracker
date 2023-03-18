import React from "react";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import {
  MdOutlineAlternateEmail,
  MdOutlineAttachMoney,
  MdOutlineSchedule,
} from "react-icons/md";
import JobInfo from "./JobInfo";

const JobItem = ({
  company,
  position,
  jobLocation,
  rectuiter,
  email,
  salary,
  jobType,
  jobStatus,
  interviewScheduled,
  createdAt,
}) => {
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
        <JobInfo icon={<FaCalendarAlt size={19} />} text={createdAt} />
        <JobInfo icon={<MdOutlineAttachMoney size={23} />} text={salary} />
        <JobInfo icon={<BsPerson size={23} />} text={rectuiter} />
        <JobInfo icon={<MdOutlineAlternateEmail size={23} />} text={email} />
        {interviewScheduled && (
          <JobInfo
            icon={<MdOutlineSchedule size={23} />}
            text={interviewScheduled}
          />
        )}
        <div className={`status ${jobStatus}`}>{jobStatus}</div>
      </div>

      <footer></footer>
    </div>
  );
};

export default JobItem;
