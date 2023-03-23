import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  width: 100%;

  .form-container {
    position: relative;
    width: 86%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    border-radius: 5px;
    padding: 20px 5px 50px 5px;
    margin-left: ${(props) => props.move};
    box-shadow: 0px 4px 10px #2e2e4148;
    transition: 0.3s ease-in-out all;
  }

  .form-container:hover {
    box-shadow: 0px 10px 18px #2e2e4148;
  }

  .logo-container {
    align-self: center;
  }

  h2 {
    align-self: center;
    color: #eb55beb0;
    font-size: 30px;
    margin-top: 5px;
  }

  .input-container {
    width: 80%;
    align-self: center;
    margin: 5px 10px 5px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .salary-min-max-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .salary-container {
    flex: 1;
  }

  .label {
    font-size: 18px;
    color: #2e2e41;
    margin-bottom: 5px;
  }

  .salary-label {
    font-size: 15px;
  }

  .input,
  .select {
    width: 100%;
    background-color: #39b6e011;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #00aeff64;
    padding-left: 10px;
    font-size: 15px;
  }

  .max {
    margin-left: 10px;
  }

  .select {
    height: 34px;
    width: 104%;
  }

  .submit-btn {
    align-self: center;
    width: 140px;
    margin-top: 40px;
    background-color: #39b5e0;
    padding: 8px 20px;
    font-size: 18px;
    border-radius: 3px;
  }

  .btn-link {
    color: white;
  }

  .submit-btn:hover {
    background-color: #eb55beb0;
  }

  .alert-container {
    align-self: center;
    font-size: 18px;
    font-family: "Cabin", Sans-Serif;
    text-align: center;
    width: 80%;
    margin: 30px 0px 20px 0px;
  }

  .danger {
    color: white;
    background: #e11298c1;
    padding: 10px 20px;
    border-radius: 4px;
  }
  .success {
    color: white;
    background: #39b6e0d2;
    padding: 10px 20px;
    border-radius: 4px;
  }
`;

export default Wrapper;
