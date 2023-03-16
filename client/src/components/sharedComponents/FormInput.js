import React from "react";

const FormInput = ({
  type,
  name,
  value,
  labelText,
  containerClass,
  labelClass,
  inputClass,
  onGetValue,
}) => {
  return (
    <div className={containerClass}>
      <label htmlFor={name} className={labelClass}>
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onGetValue}
        className={inputClass}
      />
    </div>
  );
};

export default FormInput;
