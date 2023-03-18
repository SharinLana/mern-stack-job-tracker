import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  display: block;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 0px;
  z-index: 100;
  background-color: #2e2e41f9;
  min-height: 100vh;

  .cross-btn-container {
    margin: 15px 0px 0px 15px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    overflow: hidden;
  }

  .cross-btn {
    width: 100%;
    height: 100%;
    background-color: #39b5e0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sidebar-container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
    height: 460px;
    margin-top: 40px;
  }

  .list-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 20px 0px 50px 0px;
  }

  .navLink {
    color: black;
    margin: 15px 15px 15px 0px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navLink:hover {
    color: #ff78f0;
  }

  .icon {
    margin-right: 15px;
  }

  .active {
    color: #39b5e0;
  }

  @media all and (min-width: 1000px) {
    display: none;
  }
`;

export default Wrapper;
