import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 150px;
  margin-left: ${(props) => props.move};
`;

export default Wrapper;
