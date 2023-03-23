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
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27);
    padding: 20px 5px 50px 5px;
    margin-left: ${(props) => props.move};
    transition: 0.3s ease-in-out all;
  }

  .logo-container {
    align-self: center;
  }

  h2 {
    align-self: center;
    color: #eb55beb0;
    font-size: 30px;
    margin-top: 25px;
  }

  .edit-btn {
    position: absolute;
    top: 160px;
    right: 50px;
    align-self: flex-end;
    background-color: transparent;
    color: #39b5e0;
    font-size: 20px;
  }

  .edit-btn:hover {
    color: #ff78f0;
  }

  .input-container {
    width: 80%;
    margin: 10px 0px 10px 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .data {
    margin: 10px;
    font-size: 18px;
    font-style: italic;
    color: #2e2e41d2;
  }

  .label {
    width: 100px;
    font-size: 18px;
    color: #2e2e41d2;
  }

  .input {
    margin-left: 10px;
    width: 100%;
    max-width: 200px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #00aeff64;
    padding-left: 10px;
    font-size: 18px;
    font-style: italic;
    background-color: #39b6e011;
    color: #2e2e41d2;
  }

  .submit-btn {
    align-self: center;
    margin-top: 40px;
    background-color: #39b5e0;
    padding: 8px 20px;
    font-size: 18px;
    border-radius: 6px;
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

  @media all and (max-width: 450px) {
    .input-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .data {
      margin: 0px;
      margin-top: 6px;
    }

    .label {
      width: 100%;
      font-size: 18px;
      color: #2e2e41d2;
    }

    .input {
      margin-left: 0px;
      max-width: 90%;
      margin-top: 6px;
    }
  }
`;

export default Wrapper;
