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
    border-radius: 10px;
    padding: 20px 10px 50px 10px;
  }

  h1 {
    align-self: center;
    color: #2e2e41;
  }

  .edit-btn {
    position: absolute;
    top: 100px;
    right: 50px;
    align-self: flex-end;
    background-color: transparent;
    color: #ff78f0;
    font-size: 20px;

  }

  .edit-btn:hover {
    color: #39b5e0;
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
  }

  .label {
    width: 100px;
    font-size: 18px;
    color: #2e2e41;
    font-weight: 600;
  }

  .input {
    margin-left: 10px;
    width: 100%;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #39b5e0;
    padding-left: 10px;
    font-size: 18px;
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
    background-color: #ff78f0;
  }
`;

export default Wrapper;
