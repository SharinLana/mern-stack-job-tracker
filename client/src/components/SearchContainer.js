import React from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
import FormInput from "./sharedComponents/FormInput";
import FormLabel from "./sharedComponents/FormLabel";
import SelectField from "./sharedComponents/SelectField";
import Logo from "./Logo";

const SearchContainer = () => {
  const { showLargeSidebar } = useAppContext();

  const getInputValueHandler = (e) => {
    // getInputValue({ name: e.target.name, value: e.target.value });
  };

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <form className="search-form">
        <Logo />
        <h2>Search Form</h2>
        <div className="inputs-container">
          {/* Search Bar */}
          <div className="input-container">
            <FormLabel name="search" labelText="Search:" labelClass="label" />
            <FormInput
              type="text"
              name="serach"
              onGetValue={getInputValueHandler}
              // value={}
              inputClass="input"
            />
          </div>

          {/* Job Type */}
          <div className="input-container">
            <FormLabel
              name="jobType"
              labelText="Job type:"
              labelClass="label"
            />
            <SelectField
              options={["all", "remote", "full-time", "part-time", "hybrid"]}
              onGetValue={getInputValueHandler}
              // value={}
              className="select"
            />
          </div>

          {/* Job Status */}
          <div className="input-container">
            <FormLabel
              name="jobStatus"
              labelText="Job status:"
              labelClass="label"
            />
            <SelectField
              options={["all", "pending", "interview", "declined"]}
              onGetValue={getInputValueHandler}
              // value={}
              className="select"
            />
          </div>

          {/* Sort by */}
          <div className="input-container">
            <FormLabel name="sortBy" labelText="Sort by:" labelClass="label" />
            <SelectField
              options={["latest", "oldest", "a-z", "z-a"]}
              onGetValue={getInputValueHandler}
              // value={}
              className="select"
            />
          </div>
          <div className="btn-container">
            <button type="submit" className="search-btn search">
              Search
            </button>
            <button type="button" className="search-btn clear">
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
