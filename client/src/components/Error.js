import React from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/PageNotFound";

const Error = () => {
  return (
    <Wrapper>
      <img src={notFound} alt="not found" />
      <h2>Ohh... Page not found</h2>
      <p>Sorry, we couldn't find the page you are looking for</p>
      <Link to="/">Back Home</Link>
    </Wrapper>
  );
};

export default Error;
