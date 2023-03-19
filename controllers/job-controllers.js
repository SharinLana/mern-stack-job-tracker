const getJobs = async (req, res, next) => {
    res.send("All Jobs");
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
