import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .search-form {
    width: 90%;
    max-width: 700px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 50px 0px;
    box-shadow: 0px 4px 10px #2e2e4148;
    transition: 0.3s ease-in-out all;
    margin-left: ${(props) => props.move};
  }

  .search-form:hover {
    box-shadow: 0px 10px 18px #2e2e4148;
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 35px;
    align-self: flex-start;
    font-weight: 500;
    color: #eb55bed5;
    font-size: 20px;
  }

  .inputs-container {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }

  .input-container {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .label {
    margin-bottom: 4px;
    font-size: 16px;
  }

  .input {
    width: 100%;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #00aeff64;
    padding-left: 10px;
    font-size: 16px;
    background-color: #39b6e011;
  }

  .select {
    width: 100%;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #00aeff64;
    padding-left: 4px;
    font-size: 15px;
    background-color: #39b6e011;
  }

  .btn-container {
    margin-top: 15px;
  }

  .search-btn {
    margin: 10px;
    width: 100px;
    padding: 10px 0px;
    border-radius: 6px;
    font-size: 18px;
  }

  .search {
    background-color: #39b5e0;
  }

  .clear {
    background-color: #eb55beb0;
  }

  .search-btn:hover {
    background-color: #716F81;
  }
`;

export default Wrapper;
