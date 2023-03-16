import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  text-align: center;
  width: 90%;

  img {
    max-width: 600px;
  }

  h2 {
    margin-top: 50px;
    font-size: 26px;
  }

  a {
    font-weight: 700;
    margin-top: 20px;
    font-size: 18px;
  }

  p {
    font-size: 18px;
  }
`;

export default Wrapper;
