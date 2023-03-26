import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-left: ${(props) => props.move};
  transition: 0.3s ease-in-out all;

  h4 {
    color: #2e2e41a5;
    font-size: 28px;
  }

  .chart-btn {
    width: 180px;
    border-radius: 6px;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 20px;
    color: #39B5E0;
  }

  .chart-btn:hover {
    /* background-color: white; */
    color: #eb55beb0;
  }
`;

export default Wrapper;
