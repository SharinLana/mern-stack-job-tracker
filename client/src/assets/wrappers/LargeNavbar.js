import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid white;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  background-color: white;
  padding-top: 3px;
  padding-left: 15px;
  z-index: 99;
  display: none;

  .logo-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .nav-btn {
    background-color: transparent;
    outline: none;
    margin-right: 15px;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    padding: 20px 0px 50px 0px;
    margin-left: 13px;
  }

  .navLink {
    color: #2e2e41c7;
    margin: 15px 15px 15px 0px;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navLink:hover {
    color: #eb55beb0;
  }

  .active {
    color: #39b5e0;
  }

  .icon {
    margin-right: 15px;
  }

  @media all and (min-width: 1000px) {
    display: block;
  }
`;

export default Wrapper;
