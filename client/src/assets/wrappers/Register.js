import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding: 0px 20px;

  .form-container {
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .logo-container {
    align-self: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    padding: 20px 40px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 4px 10px #2e2e4148;
    transition: 0.3s ease-in-out all;
  }

  form:hover {
    box-shadow: 0px 10px 18px #2e2e4148;
  }

  h2 {
    align-self: center;
    color: #eb55bed5;
    font-size: 36px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 6px 0px;
  }

  .input {
    height: 30px;
    padding-left: 10px;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 16px;
    border: 1px solid #00aeff64;
    border-radius: 5px;
    background-color: #39b6e011;
  }

  .label {
    font-size: 18px;
    margin-top: 10px;
  }

  .submit-btn {
    align-self: center;
    width: 140px;
    margin-top: 20px;
    padding: 8px;
    font-size: 20px;
    border-radius: 5px;
    background-color: white;
    color: #39b5e0;
    border: 1px solid #39b6e0ae;
  }

  .submit-btn:hover {
    background-color: #39b6e0ae;
    color: white;
    border: none;
  }

  .demo-btn {
    align-self: center;
    width: 140px;
    margin-top: 20px;
    padding: 8px;
    font-size: 20px;
    border-radius: 5px;
    background-color: #39b5e0;
  }

  .demo-btn:hover {
    background-color: white;
    color: #39b5e0;
    border: 1px solid #39b6e0ae;
  }

  .toggle-par {
    font-size: 18px;
  }

  .toggle-btn {
    background-color: transparent;
    margin-left: 10px;
    color: #39b5e0;
    font-size: 19px;
    font-family: "Cabin", Sans-Serif;
  }

  .asterisk {
    color: #ff78f0;
    font-size: 22px;
  }

  .alert-container {
    align-self: center;
    font-size: 18px;
    font-family: "Cabin", Sans-Serif;
    text-align: center;
    width: 100%;
  }

  .danger {
    color: white;
    background: #e11299;
    padding: 10px 20px;
    border-radius: 4px;
  }
  .success {
    color: white;
    background: #39b6e0d2;
    padding: 10px 20px;
    border-radius: 4px;
  }

  @media all and (max-width: 400px) {
    form {
      padding: 20px;
      width: 100%;
    }
    .toggle-par {
      font-size: 16px;
    }
    .toggle-btn {
      margin-left: 0px;
      font-size: 16px;
    }
  }
`;

export default Wrapper;
