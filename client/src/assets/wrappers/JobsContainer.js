import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .header-container {
    margin-left: ${(props) => props.move};
    transition: 0.3s ease-in-out all;
  }

  h4 {
    margin-top: 50px;
    font-size: 22px;
    color: #2e2e41d2;
  }

  .jobs-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-left: ${(props) => props.move};
    margin-bottom: 50px;
    transition: 0.3s ease-in-out all;
  }

  .job-container {
    border: 1px solid white;
    margin: 15px;
    width: 90%;
    max-width: 700px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 10px #2e2e4148;
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

  footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
  }

  .btn {
    width: 100px;
    padding: 8px 0px;
    text-align: center;
    margin: 10px;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .edit-btn {
    background-color: #39b5e0;
    margin-left: 30px;
    transition: 0.3s ease-in-out all;
  }

  .delete-btn {
    background-color: #716f81;
  }

  .edit-btn:hover {
    background-color: #39b6e0a5;
  }

  .delete-btn:hover {
    background-color: #716f819e;
  }
`;

export default Wrapper;
