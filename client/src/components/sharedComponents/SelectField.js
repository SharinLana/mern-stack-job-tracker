import React from "react";

const SelectField = ({ options, className }) => {
  return (
    <select className={className}>
      {options.map((option, index) => {
        return <option key={index} >{option}</option>;
      })}
    </select>
  );
};

export default SelectField;
