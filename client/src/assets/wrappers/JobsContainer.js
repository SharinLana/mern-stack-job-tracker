import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h4 {
    margin-top: 50px;
    font-size: 22px;
    color: white;
    margin-left: ${(props) => props.move};
  }

  .jobs-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-left: ${(props) => props.move};
  }

  .job-container {
    border: 1px solid white;
    margin: 15px;
    width: 90%;
    max-width: 700px;
    background-color: white;
    border-radius: 5px;
  }

  header {
    border-bottom: 1px solid #7b7b7dc3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 30px;
  }

  .main-icon {
    font-family: "Roboto Condensed", Sans-Serif;
    font-size: 30px;
    font-weight: 600;
    background-color: #39b5e0;
    padding: 8px 18px;
    border-radius: 5px;
    color: white;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 30px;
  }

  .position,
  .company {
    margin: 0px;
  }

  .position {
    font-size: 20px;
    font-weight: 500;
  }

  .company {
    font-size: 18px;
    margin-top: 8px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #7b7b7dc3;
  }

  .job-middle-container {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
  }

  .status {
    margin: 10px;
    font-family: "Cabin", Sans-Serif;
    font-size: 18px;
    color: #2e2e41d8;
    padding: 4px 10px;
    border-radius: 2px;
  }

  .pending {
    background: #fcefc7;
    color: #f69312;
  }
  .interview {
    background: #c0deff;
    color: #39b5e0;
  }
  .declined {
    color: #a31acb;
    background: #a21acb65;
  }
`;

export default Wrapper;
