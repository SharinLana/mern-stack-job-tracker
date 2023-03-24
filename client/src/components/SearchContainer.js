import React from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
import FormInput from "./sharedComponents/FormInput";
import FormLabel from "./sharedComponents/FormLabel";
import SelectField from "./sharedComponents/SelectField";
import Logo from "./Logo";

const SearchContainer = () => {
  const {
    showLargeSidebar,
    jobTypeOptions,
    statusOptions,
    search,
    searchJobStatus,
    searchJobType,
    sort,
    sortOptions,
    getInputValues,
  } = useAppContext();

  const getInputValueHandler = (e) => {
    getInputValues({ name: e.target.name, value: e.target.value });
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
              name="search"
              onGetValue={getInputValueHandler}
              value={search}
              inputClass="input"
            />
          </div>

          {/* Job Type */}
          <div className="input-container">
            <SelectField
              labelText="Job type:"
              name="searchJobType"
              onGetValue={getInputValueHandler}
              value={searchJobType}
              className="select"
              options={["all", ...jobTypeOptions]}
            />
          </div>

          {/* Job Status */}
          <div className="input-container">
            <SelectField
              labelText="Job status:"
              name="searchJobStatus"
              onGetValue={getInputValueHandler}
              value={searchJobStatus}
              className="select"
              options={["all", ...statusOptions]}
            />
          </div>

          {/* Sort by */}
          <div className="input-container">
            <SelectField
              labelText="Sort by:"
              name="sort"
              onGetValue={getInputValueHandler}
              value={sort}
              className="select"
              options={sortOptions}
            />
          </div>
          <div className="btn-container">
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
