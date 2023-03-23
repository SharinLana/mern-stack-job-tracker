import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/AddJob";
import Logo from "../Logo";
import FormLabel from "../sharedComponents/FormLabel";
import FormInput from "../sharedComponents/FormInput";
import { useAppContext } from "../../context/appContext";
import SelectField from "../sharedComponents/SelectField";

const AddJob = () => {
  const {
    showLargeSidebar,
    isEditing,
    setEditJob,
    getInputValues,
    displayAlert,
    company,
    position,
    jobLocation,
    recruiter,
    recruiterEmail,
    salary,
    interviewScheduledAt,
    jobType,
    jobTypeOptions,
    statusOptions,
    status,
  } = useAppContext();

  console.log(
    company,
    // position,
    // jobLocation,
    // recruiter,
    // recruiterEmail,
    // salary,
    jobType,
    status,
    interviewScheduledAt
  );

  const getInputValueHandler = (e) => {
    getInputValues({ name: e.target.name, value: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!company || !position) {
      displayAlert();
      return;
    }
  };

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <form className="form-container" onSubmit={formSubmitHandler}>
        <div className="logo-container">
          <Logo />
        </div>
        <h2>{isEditing ? "Edit Job" : "Add New Job"}</h2>

        {/* Company */}
        <div className="input-container">
          <FormLabel name="company" labelText="Company:" labelClass="label" />
          <FormInput
            type="text"
            name="company"
            onGetValue={getInputValueHandler}
            // value={company}
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
            // value={position}
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
            // value={jobLocation}
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
            // value={recruiter}
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
            // value={recruiterEmail}
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
          <FormInput
            type="text"
            name="salary"
            onGetValue={getInputValueHandler}
            // value={salary}
            inputClass="input"
          />
        </div>

        {/* Job Type */}
        <div className="input-container">
          <SelectField
            labelText="jobType"
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
            labelText="Status"
            name="status"
            onGetValue={getInputValueHandler}
            value={status}
            className="select"
            options={statusOptions}
          />
        </div>

        {/* Interview Scheduled at */}
        {status === "interview" && (
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
        <button
          type="submit"
          className="submit-btn"
          onClick={() => setEditJob(false)}
        >
          <Link to="/all-jobs" className="btn-link">
            {isEditing ? "Save Changes" : "Add Job"}
          </Link>
        </button>
      </form>
    </Wrapper>
  );
};

export default AddJob;
