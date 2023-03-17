import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h4 {
    color: white;
    font-size: 28px;
  }

  .chart-btn {
    width: 150px;
    border-radius: 6px;
    background-color: #2e2e41;
    font-size: 18px;
    font-weight: 600;
    padding: 8px 20px;
  }

  .chart-btn:hover {
    background-color: white;
    color: #ff78f0;
  }
`;

export default Wrapper;
