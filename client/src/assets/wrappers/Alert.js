import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
  border-color: transparent;
  border-radius: var(--borderRadius);
  text-align: center;
  letter-spacing: var(--letterSpacing);


.danger {
  color: var(--red-dark);
  background: var(--red-light);
}
.success {
  color: var(--green-dark);
  background: var(--green-light);
}
`;

export default Wrapper;
