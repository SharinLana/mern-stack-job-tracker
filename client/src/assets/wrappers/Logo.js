import styled from "styled-components";

const Wrapper = styled.div`
  width: 200px;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
  }

  h1 {
    font-size: 35px;
    color: white;
    padding: 0px 14px;
    border-radius: 10px;
    background-color: #39b6e0e5;
    margin: 0px;
  }

  p {
    color: #39b6e0e5;
    font-family: "Roboto Condensed", Sans-Serif;
    font-size: 26px;
    font-weight: 600;
    margin: 18px;
    margin-left: 12px;
  }
`;

export default Wrapper;
