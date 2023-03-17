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
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 50px 0px;
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: 35px;
    align-self: flex-start;
    font-weight: 500;
    color: #ff78f0;
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
    border: 1px solid #39b5e0;
    padding-left: 10px;
    font-size: 16px;
  }

  .select {
    width: 100%;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #39b5e0;
    padding-left: 4px;
    font-size: 15px;
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
    background-color: #ff78f0;
  }

  .search-btn:hover {
    background-color: #2e2e41;
  }
`;

export default Wrapper;
