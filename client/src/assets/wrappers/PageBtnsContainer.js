import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .handle-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #39b5e0;
    border: none;
    width: 80px;
    padding: 8px;
    border-radius: 4px;
    margin: 8px;
    font-size: 16px;
  }

  .page-btns-container {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .dots {
    margin: 0px 4px;
    font-size: 24px;
  }

  .pageBtn {
    background-color: #2e2e41b9;
    border: none;
    font-size: 16px;
    border-radius: 3px;
    margin: 3px;
    width: 30px;
    padding: 8px;
  }

  .pageBtn:hover {
    background-color: #2e2e417f;
  }

  .active {
    background-color: #39b5e0;
  }

  .handle-btn:hover {
    box-shadow: 0px 3px 6px #2e2e4148;
  }
`;

export default Wrapper;
