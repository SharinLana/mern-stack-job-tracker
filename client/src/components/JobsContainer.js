import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
import PageBtnsContainer from "./PageBtnsContainer";
import JobItem from "./sharedComponents/JobItem";

const JobsContainer = () => {
  const {
    showLargeSidebar,
    getAllJobs,
    jobs,
    numOfPages,
    page,
    totalJobs,
    search,
    searchJobStatus,
    searchJobType,
    sort,
  } = useAppContext();

  useEffect(() => {
    getAllJobs();
    // eslint-disable-next-line
  }, [page, search, sort, searchJobStatus, searchJobType]);

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <div className="header-container">
        <h4>
          {totalJobs} job{jobs.length > 1 && "s"} found
        </h4>
        {numOfPages > 1 && <PageBtnsContainer />}
      </div>

      <div className="jobs-container">
        {jobs.map((job) => {
          return <JobItem key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnsContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
