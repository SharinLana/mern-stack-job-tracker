import React from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/AddJob";
import Logo from "../Logo";
import FormLabel from "../sharedComponents/FormLabel";
import FormInput from "../sharedComponents/FormInput";
import { useAppContext } from "../../context/appContext";
import SelectField from "../sharedComponents/SelectField";
import Alert from "../sharedComponents/Alert";

const AddJob = () => {
  const navigate = useNavigate();
  const {
    showLargeSidebar,
    showAlert,
    isEditing,
    isLoading,
    getInputValues,
    displayAlert,
    company,
    position,
    jobLocation,
    recruiter,
    recruiterEmail,
    salaryMin,
    salaryMax,
    interviewScheduledAt,
    jobType,
    jobTypeOptions,
    statusOptions,
    jobStatus,
    addJob,
    clearInputValues,
    editJob,
  } = useAppContext();

  const getInputValueHandler = (e) => {
    getInputValues({ name: e.target.name, value: e.target.value });
  };

  const navigateToAllJobs = () => {
    setTimeout(() => {
      navigate("/all-jobs");
      clearInputValues();
    }, 1800);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !company ||
      !position ||
      (jobStatus === "interview" && !interviewScheduledAt)
    ) {
      displayAlert();
      return;
    }

    if (isEditing) {
      if (
        !company ||
        !position ||
        (jobStatus === "interview" && !interviewScheduledAt)
      ) {
        displayAlert();
        return;
      }
      editJob();
      navigateToAllJobs();
      return;
    }

    addJob();
    navigateToAllJobs();
  };

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <form className="form-container" onSubmit={formSubmitHandler}>
        <div className="logo-container">
          <Logo />
        </div>
        <h2>{isEditing ? "Edit Job" : "Add New Job"}</h2>

        {showAlert && <Alert />}

        {/* Company */}
        <div className="input-container">
          <FormLabel name="company" labelText="Company:" labelClass="label" />
          <FormInput
            type="text"
            name="company"
            onGetValue={getInputValueHandler}
            value={company}
            required
            inputClass="input"
          />
        </div>

        {/* Job Position */}
        <div className="input-container">
          <FormLabel
            name="position"
            labelText="Job position:"
            labelClass="label"
          />
          <FormInput
            type="text"
            name="position"
            onGetValue={getInputValueHandler}
            value={position}
            required
            inputClass="input"
          />
        </div>

        {/* Location */}
        <div className="input-container">
          <FormLabel
            name="jobLocation"
            labelText="Location:"
            labelClass="label"
          />
          <FormInput
            type="text"
            name="jobLocation"
            onGetValue={getInputValueHandler}
            value={jobLocation}
            inputClass="input"
          />
        </div>

        {/* Contact Person */}
        <div className="input-container">
          <FormLabel
            name="recruiter"
            labelText="Contact person:"
            labelClass="label"
          />
          <FormInput
            type="text"
            name="recruiter"
            onGetValue={getInputValueHandler}
            value={recruiter}
            inputClass="input"
          />
        </div>

        {/* Recruiter's Email */}
        <div className="input-container">
          <FormLabel
            name="recruiterEmail"
            labelText="Email:"
            labelClass="label"
          />
          <FormInput
            type="email"
            name="recruiterEmail"
            onGetValue={getInputValueHandler}
            value={recruiterEmail}
            inputClass="input"
          />
        </div>

        {/* Salary Range */}
        <div className="input-container">
          <FormLabel
            name="salary"
            labelText="Salary range:"
            labelClass="label"
          />
          <div className="salary-min-max-container">
            <div className="input-container salary-container">
              <FormLabel
                name="salaryMin"
                labelText="$ Min:"
                labelClass="label salary-label"
              />
              <FormInput
                type="number"
                name="salaryMin"
                onGetValue={getInputValueHandler}
                value={salaryMin}
                inputClass="input "
              />
            </div>
            <div className="input-container salary-container">
              <FormLabel
                name="salaryMax"
                labelText="$ Max:"
                labelClass="label salary-label"
              />
              <FormInput
                type="number"
                name="salaryMax"
                onGetValue={getInputValueHandler}
                value={salaryMax}
                inputClass="input max"
              />
            </div>
          </div>
        </div>

        {/* Job Type */}
        <div className="input-container">
          <SelectField
            labelText="Job Type"
            name="jobType"
            onGetValue={getInputValueHandler}
            value={jobType}
            className="select"
            options={jobTypeOptions}
          />
        </div>

        {/* Job Status */}
        <div className="input-container">
          <SelectField
            labelText="Job Status"
            name="jobStatus"
            onGetValue={getInputValueHandler}
            value={jobStatus}
            className="select"
            options={statusOptions}
          />
        </div>

        {/* Interview Scheduled at */}
        {jobStatus === "interview" && (
          <div className="input-container">
            <FormLabel
              name="interviewScheduledAt"
              labelText="Interview scheduled at:"
              labelClass="label"
            />
            <FormInput
              type="datetime-local"
              name="interviewScheduledAt"
              onGetValue={getInputValueHandler}
              value={interviewScheduledAt}
              inputClass="input"
            />
          </div>
        )}
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Saving the job..." : "Save"}
        </button>
      </form>
    </Wrapper>
  );
};

export default AddJob;
