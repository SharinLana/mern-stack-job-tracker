import React from "react";

const SelectField = ({ labelText, name, value, options, className, onGetValue }) => {
  return (
    <>
      <label htmlFor={name} className="label">
        {labelText}
      </label>
      <select
        className={className}
        name={name}
        value={value}
        onChange={onGetValue}
      >
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
};

export default SelectField;
