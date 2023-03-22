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
    display: none;
  }

  .user-btn {
    position: relative;
    width: 140px;
    background-color: #716f81;
    padding: 10px 20px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-name {
    margin: 0px 10px;
    font-size: 16px;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    height: 40px;
    background: #eb55bed5;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    border-radius: 2px;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: white;
    letter-spacing: 1px;
    text-transform: capitalize;
    font-size: 18px;
    cursor: pointer;
    transition: none;
  }

  @media all and (min-width: 800px) {
    h2 {
      display: block;
      color: #eb55bed5;
      font-size: 30px;
      margin: 0px;
      margin-left: 150px;
    }
  }
`;

export default Wrapper;
