import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
  margin-left: ${(props) => props.move};
  transition: 0.3s ease-in-out all;
`;

export default Wrapper;
