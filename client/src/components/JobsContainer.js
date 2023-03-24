import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppContext } from "../context/appContext";
import JobItem from "./sharedComponents/JobItem";

const JobsContainer = () => {
  const {
    showLargeSidebar,
    getAllJobs,
    jobs,
    isLoading,
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
      <h4>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h4>

      <div className="jobs-container">
        {jobs.map((job) => {
          return <JobItem key={job._id} {...job} />;
        })}
      </div>
      {/* Pages later*/}
    </Wrapper>
  );
};

export default JobsContainer;
