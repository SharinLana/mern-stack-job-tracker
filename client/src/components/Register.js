import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Register";
import Logo from "./Logo";
import FormInput from "./sharedComponents/FormInput";

const initialState = {
  firstName: "",
  lastName: "",
  location: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [inputValue, setInputValue] = useState(initialState);

  const getInputValueHandler = (e) => {
    setInputValue((currentValues) => {
      return { ...currentValues, [e.target.name]: e.target.value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const toggleBtnHandler = () => {
    setInputValue((currentValues) => {
      return { ...currentValues, isMember: !currentValues.isMember };
    });
  };

  return (
    <>
      <Wrapper>
        <main className="form-container">
          <form onSubmit={formSubmitHandler}>
            <div className="logo-container">
              <Logo />
            </div>
            <h2>{inputValue.isMember ? "Login" : "Register"}</h2>
            {!inputValue.isMember && (
              <>
                <FormInput
                  type="text"
                  name="firstName"
                  labelText="First name*"
                  onGetValue={getInputValueHandler}
                  value={inputValue.firstName}
                  required
                  containerClass="input-container"
                  labelClass="label"
                  inputClass="input"
                />
                <FormInput
                  type="text"
                  name="lastName"
                  labelText="Last name*"
                  onGetValue={getInputValueHandler}
                  value={inputValue.lastName}
                  required
                  containerClass="input-container"
                  labelClass="label"
                  inputClass="input"
                />
                <FormInput
                  type="text"
                  name="location"
                  labelText="Your location"
                  onGetValue={getInputValueHandler}
                  value={inputValue.location}
                  containerClass="input-container"
                  labelClass="label"
                  inputClass="input"
                />
              </>
            )}

            {/* email */}
            <FormInput
              type="email"
              name="email"
              labelText="Email*"
              onGetValue={getInputValueHandler}
              value={inputValue.email}
              required
              containerClass="input-container"
              labelClass="label"
              inputClass="input"
            />

            {/* password */}
            <FormInput
              type="text"
              name="password"
              labelText="Password*"
              onGetValue={getInputValueHandler}
              value={inputValue.password}
              required
              containerClass="input-container"
              labelClass="label"
              inputClass="input"
            />

            <button type="submit" className="submit-btn">
              Submit
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
    </>
  );
};

export default Register;
