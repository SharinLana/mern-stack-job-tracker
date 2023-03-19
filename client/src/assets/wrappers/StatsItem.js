import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  width: 160px;
  box-shadow: 0px 4px 10px #2e2e4148;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: left;
    margin-top: 10px;
    font-size: 20px;
    color: #2e2e41a5;
  }
  .icon {
    width: 70px;
    height: 70px;
    background: ${(props) => props.bcg};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 30px;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
