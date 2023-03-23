import React from "react";
// import Wrapper from "../../assets/wrappers/Alert";
import { useAppContext } from "../../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();

  return (
    <div className="alert-container">
      <div className={`${alertType}`}>{alertText}</div>
    </div>
  );
};

export default Alert;
