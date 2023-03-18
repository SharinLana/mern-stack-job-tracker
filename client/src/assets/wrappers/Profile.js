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
    border-radius: 10px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27);
    padding: 20px 5px 50px 5px;
    margin-left: ${(props) => props.move};
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

  .edit-btn {
    position: absolute;
    top: 140px;
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
    width: 200px;
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
`;

export default Wrapper;
