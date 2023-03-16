import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #39b5e0;
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
  }

  h2 {
    align-self: center;
    color: #ff78f0;
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
    font-size: 16px;
  }

  .label {
    font-size: 18px;
  }

  .submit-btn {
    align-self: center;
    width: 200px;
    margin-top: 20px;
    padding: 8px;
    background-color: #ff78f0;
    font-size: 20px;
  }

  .toggle-par {
    font-size: 18px;
  }

  .toggle-btn {
    background-color: transparent;
    margin-left: 10px;
    color: #00b0ff;
    font-size: 19px;
    font-family: "Cabin", Sans-Serif;
  }

  .asterisk {
    color: #ff78f0;
    font-size: 22px;
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
