import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Register";
import Logo from "./Logo";
import FormInput from "./sharedComponents/FormInput";
import FormLabel from "./sharedComponents/FormLabel";

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

      <Wrapper>
        <main className="form-container">
          <form onSubmit={formSubmitHandler}>
            <div className="logo-container">
              <Logo />
            </div>
            <h2>{inputValue.isMember ? "Login" : "Register"}</h2>
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
                    name="location"
                    labelText="Your location"
                    labelClass="label"
                  />
                  <FormInput
                    type="text"
                    name="location"
                    onGetValue={getInputValueHandler}
                    value={inputValue.location}
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

  );
};

export default Register;
