import React from "react";

const FormLabel = ({ name, labelText, labelClass }) => {
  return (
    <label htmlFor={name} className={labelClass}>
      {labelText}
    </label>
  );
};

export default FormLabel;
