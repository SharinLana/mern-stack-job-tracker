import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid white;
  background-color: white;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 25px;
  }

  .nav-btn {
    background-color: transparent;
    outline: none;
  }

  h2 {
    display: none
  }

  .user-btn {
    background-color: #716F81;
    padding: 10px 20px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-name {
    margin: 0px 10px;
    font-size: 16px;
  }

  @media all and (min-width: 800px) {
    h2 {
      display: block;
      color: #eb55bed5;
      font-size: 30px;
      margin: 0px;
      margin-left: 150px
    }
  }
`;

export default Wrapper;
