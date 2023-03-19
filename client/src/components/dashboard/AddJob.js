import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/AddJob";
import Logo from "../Logo";
import FormLabel from "../sharedComponents/FormLabel";
import FormInput from "../sharedComponents/FormInput";
import { useAppContext } from "../../context/appContext";

const AddJob = () => {
  const { showLargeSidebar, isEditing, setEditJob } = useAppContext();
  const getInputValueHandler = (e) => {
    // getInputValue({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <form className="form-container">
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
          <FormLabel name="location" labelText="Location:" labelClass="label" />
          <FormInput
            type="text"
            name="location"
            onGetValue={getInputValueHandler}
            // value={location}
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
          <FormLabel name="email" labelText="Email:" labelClass="label" />
          <FormInput
            type="email"
            name="email"
            onGetValue={getInputValueHandler}
            // value={email}
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
          <FormLabel name="jobType" labelText="Job type:" labelClass="label" />
          <FormInput
            type="text"
            name="jobType"
            onGetValue={getInputValueHandler}
            // value={jobType}
            inputClass="input"
          />
        </div>

        {/* Job Status */}
        <div className="input-container">
          <FormLabel
            name="jobStatus"
            labelText="Job status:"
            labelClass="label"
          />
          <FormInput
            type="text"
            name="jobStatus"
            onGetValue={getInputValueHandler}
            // value={jobStatus}
            required
            inputClass="input"
          />
        </div>

        <button type="submit" className="submit-btn" onClick={() => setEditJob(false)}>
          <Link to="/all-jobs" className="btn-link">{isEditing ? "Save Changes" : "Add Job"}</Link>
        </button>
      </form>
    </Wrapper>
  );
};

export default AddJob;
