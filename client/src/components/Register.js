import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Register";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import FormInput from "./sharedComponents/FormInput";
import FormLabel from "./sharedComponents/FormLabel";
import Alert from "./sharedComponents/Alert";

const initialState = {
  firstName: "",
  lastName: "",
  userLocation: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const { registerUser, isLoading, user, loginUser, showAlert, displayAlert } =
    useAppContext();
  const navigate = useNavigate();

  const getInputValueHandler = (e) => {
    setInputValue((currentValues) => {
      return { ...currentValues, [e.target.name]: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const { firstName, lastName, userLocation, email, password, isMember } =
      inputValue;

    if (!email || !password || (!isMember && (!firstName || !lastName))) {
      displayAlert();
      return;
    }

    const currentUser = { firstName, lastName, userLocation, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  // Redirecting user to the home page after successful registration
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const toggleBtnHandler = () => {
    setInputValue((currentValues) => {
      return { ...currentValues, isMember: !currentValues.isMember };
    });
  };

  return (
    <Wrapper>
      <main className="form-container">
        <form onSubmit={formSubmitHandler}>
          <div className="logo-container">
            <Logo />
          </div>
          <h2>{inputValue.isMember ? "Login" : "Register"}</h2>
          {showAlert && <Alert />}

          <div className="input-container">
            {!inputValue.isMember && (
              <>
                {/* First Name */}
                <FormLabel
                  name="firstName"
                  labelText="First name*"
                  labelClass="label"
                />
                <FormInput
                  type="text"
                  name="firstName"
                  onGetValue={getInputValueHandler}
                  value={inputValue.firstName}
                  required
                  inputClass="input"
                />

                {/* Last Name */}
                <FormLabel
                  name="lastName"
                  labelText="Last name*"
                  labelClass="label"
                />
                <FormInput
                  type="text"
                  name="lastName"
                  onGetValue={getInputValueHandler}
                  value={inputValue.lastName}
                  required
                  inputClass="input"
                />

                {/* Location */}
                <FormLabel
                  name="userLocation"
                  labelText="Your location"
                  labelClass="label"
                />
                <FormInput
                  type="text"
                  name="userLocation"
                  onGetValue={getInputValueHandler}
                  value={inputValue.userLocation}
                  inputClass="input"
                />
              </>
            )}

            {/* email */}
            <FormLabel name="email" labelText="Email*" labelClass="label" />
            <FormInput
              type="email"
              name="email"
              onGetValue={getInputValueHandler}
              value={inputValue.email}
              required
              inputClass="input"
            />

            {/* password */}
            <FormLabel
              name="password"
              labelText="Password*"
              labelClass="label"
            />
            <FormInput
              type="text"
              name="password"
              onGetValue={getInputValueHandler}
              value={inputValue.password}
              required
              inputClass="input"
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <button
            type="submit"
            className="demo-btn"
            disabled={isLoading}
            onClick={() =>
              loginUser({ email: "test@gmail.com", password: "testSecret" })
            }
          >
            View Demo
          </button>

          <p>
            <span className="asterisk">*</span> Required fields
          </p>

          <p className="toggle-par">
            {inputValue.isMember ? "Not a member yet?" : "Already a member?"}
            <button
              type="button"
              onClick={toggleBtnHandler}
              className="toggle-btn"
            >
              {inputValue.isMember ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </main>
    </Wrapper>
  );
};

export default Register;
