import React from "react";

const FormInput = ({ type, name, value, inputClass, onGetValue }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onGetValue}
      className={inputClass}
    />
  );
};

export default FormInput;
