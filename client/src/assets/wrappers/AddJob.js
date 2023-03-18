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
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.27);
    padding: 20px 5px 50px 5px;
    margin-left: ${(props) => props.move};
  }

  .logo-container {
    align-self: center;
  }

  h2 {
    align-self: center;
    color: #ff78f0;
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

  .label {
    font-size: 18px;
    color: #2e2e41;
    margin-bottom: 5px;
  }

  .input {
    width: 100%;

    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #39b5e0;
    padding-left: 10px;
    font-size: 15px;
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
