import React from "react";
import Wrapper from "../../assets/wrappers/Alert";
import { useAppContext } from "../../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();

  return <Wrapper className={`${alertType}`}>{alertText}</Wrapper>;
};

export default Alert;
