import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/Profile";
import FormInput from "../sharedComponents/FormInput";
import FormLabel from "../sharedComponents/FormLabel";
import { useAppContext } from "../../context/appContext";
import Logo from "../Logo";
import Alert from "../sharedComponents/Alert";

// const initialState = {
//   firstName: "Kate",
//   lastName: "Foster",
//   userLocation: "Toronto",
//   email: "kate@test.com",
//   password: "kateSecret",
// };

const Profile = () => {
  const {
    showProfileEditingInputs,
    isProfileInputsActive,
    showLargeSidebar,
    user,
    updateUser,
    showAlert,
    displayAlert,
  } = useAppContext();
  const [inputValue, setInputValue] = useState(user);

  const getInputValueHandler = (e) => {
    setInputValue((currentValues) => {
      return { ...currentValues, [e.target.name]: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { firstName, lastName, userLocation, email } = inputValue;

    if (!firstName || !lastName || !email) {
      displayAlert();
      return;
    }

    const currentUser = { firstName, lastName, userLocation, email };
    updateUser(currentUser);
  };

  return (
    <Wrapper move={showLargeSidebar ? "250px" : "0px"}>
      <form className="form-container" onSubmit={formSubmitHandler}>
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

        {showAlert && <Alert />}

        {/* First Name */}
        <div className="input-container">
          <FormLabel
            name="firstName"
            labelText="First Name:"
            labelClass="label"
          />

          {!isProfileInputsActive && <p className="data">{user.firstName}</p>}
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
          {!isProfileInputsActive && <p className="data">{user.lastName}</p>}
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
          <FormLabel
            name="userLocation"
            labelText="Location:"
            labelClass="label"
          />
          {!isProfileInputsActive && (
            <p className="data">{user.userLocation}</p>
          )}
          {isProfileInputsActive && (
            <FormInput
              type="text"
              name="userLocation"
              onGetValue={getInputValueHandler}
              value={inputValue.userLocation}
              inputClass="input"
            />
          )}
        </div>

        {/* Email */}
        <div className="input-container">
          <FormLabel name="email" labelText="Email:" labelClass="label" />
          {!isProfileInputsActive && <p className="data">{user.email}</p>}
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

        {isProfileInputsActive && (
          <button type="submit" className="submit-btn">
            Save Changes
          </button>
        )}
      </form>
    </Wrapper>
  );
};

export default Profile;
