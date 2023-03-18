import React from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
import JobItem from "./sharedComponents/JobItem";

const jobs = [
  {
    id: 1,
    company: "Google",
    position: "Front-end Web Developer",
    jobLocation: "Palo Alto, CA",
    rectuiter: "John Smith",
    email: "john@gmail.com",
    salary: "140 - 160",
    jobType: "hybrid",
    jobStatus: "interview",
    interviewScheduled: "May 22, 12.30 PM",
    createdAt: "March 28th, 2023",
  },
  {
    id: 2,
    company: "Amazon",
    position: "Front-end Web Developer",
    jobLocation: "Irvine, CA",
    rectuiter: "Bob Meyer",
    email: "bob@gmail.com",
    salary: "140 - 160",
    jobType: "full-time",
    jobStatus: "pending",
    interviewScheduled: "",
    createdAt: "March 28th, 2023",
  },
  {
    id: 3,
    company: "Pinterest",
    position: "Back-end Web Developer",
    jobLocation: "Los Angeles, CA",
    rectuiter: "April Smith",
    email: "april@gmail.com",
    salary: "140 - 160",
    jobType: "part-time",
    jobStatus: "declined",
    interviewScheduled: "",
    createdAt: "March 28th, 2023",
  },
  {
    id: 4,
    company: "Twitter",
    position: "Front-end Web Developer",
    jobLocation: "Palo Alto, CA",
    rectuiter: "Glenn Mitchell",
    email: "glenn@gmail.com",
    salary: "140 - 160",
    jobType: "full-time",
    jobStatus: "pending",
    interviewScheduled: "",
    createdAt: "March 28th, 2023",
  },
  {
    id: 5,
    company: "Apple",
    position: "Front-end Web Developer",
    jobLocation: "Palo Alto, CA",
    rectuiter: "Lisa Messer",
    email: "lisa@gmail.com",
    salary: "140 - 160",
    jobType: "remote",
    jobStatus: "interview",
    interviewScheduled: "May 18, 11.30 AM",
    createdAt: "March 28th, 2023",
  },
];

const JobsContainer = () => {
  const { showLargeSidebar } = useAppContext();
  
  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <h4>25 jobs found</h4>

      <div className="jobs-container">
        {jobs.map((job) => {
          return <JobItem key={job.id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
