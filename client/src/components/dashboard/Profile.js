import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Profile";
import FormInput from "../sharedComponents/FormInput";
import FormLabel from "../sharedComponents/FormLabel";
import { useAppContext } from "../../context/appContext";
import Logo from "../Logo";

const initialState = {
  firstName: "Kate",
  lastName: "Foster",
  location: "Toronto",
  email: "kate@test.com",
  password: "kateSecret",
};

const Profile = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const {
    showProfileEditingInputs,
    isProfileInputsActive,
    saveProfileChanges,
  } = useAppContext();

  const getInputValueHandler = (e) => {
    setInputValue((currentValues) => {
      return { ...currentValues, [e.target.name]: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className="form-container">
        <div className="logo-container">
          <Logo />
        </div>

        <h2>Profile</h2>

        {!isProfileInputsActive && (
          <button
            type="button"
            className="edit-btn"
            onClick={showProfileEditingInputs}
          >
            Edit
          </button>
        )}
        {/* First Name */}
        <div className="input-container">
          <FormLabel
            name="firstName"
            labelText="First Name:"
            labelClass="label"
          />

          {!isProfileInputsActive && (
            <p className="data">{initialState.firstName}</p>
          )}
          {isProfileInputsActive && (
            <FormInput
              type="text"
              name="firstName"
              onGetValue={getInputValueHandler}
              value={inputValue.firstName}
              required
              inputClass="input"
            />
          )}
        </div>

        {/* Last Name */}
        <div className="input-container">
          <FormLabel
            name="lastName"
            labelText="Last Name:"
            labelClass="label"
          />
          {!isProfileInputsActive && (
            <p className="data">{initialState.lastName}</p>
          )}
          {isProfileInputsActive && (
            <FormInput
              type="text"
              name="lastName"
              onGetValue={getInputValueHandler}
              value={inputValue.lastName}
              required
              inputClass="input"
            />
          )}
        </div>

        {/* Location */}
        <div className="input-container">
          <FormLabel name="location" labelText="Location:" labelClass="label" />
          {!isProfileInputsActive && (
            <p className="data">{initialState.location}</p>
          )}
          {isProfileInputsActive && (
            <FormInput
              type="text"
              name="location"
              onGetValue={getInputValueHandler}
              value={inputValue.location}
              required
              inputClass="input"
            />
          )}
        </div>

        {/* Email */}
        <div className="input-container">
          <FormLabel name="email" labelText="Email:" labelClass="label" />
          {!isProfileInputsActive && (
            <p className="data">{initialState.email}</p>
          )}
          {isProfileInputsActive && (
            <FormInput
              type="email"
              name="email"
              onGetValue={getInputValueHandler}
              value={inputValue.email}
              required
              inputClass="input"
            />
          )}
        </div>

        {/* Password */}
        <div className="input-container">
          <FormLabel name="password" labelText="Password:" labelClass="label" />
          {!isProfileInputsActive && (
            <p className="data">{initialState.password}</p>
          )}
          {isProfileInputsActive && (
            <FormInput
              type="text"
              name="password"
              onGetValue={getInputValueHandler}
              value={inputValue.password}
              required
              inputClass="input"
            />
          )}
        </div>

        {isProfileInputsActive && (
          <button
            type="submit"
            className="submit-btn"
            onClick={saveProfileChanges}
          >
            Save Changes
          </button>
        )}
      </form>
    </Wrapper>
  );
};

export default Profile;
