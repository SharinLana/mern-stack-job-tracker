import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #39b5e0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
  }

  .info-container {
    padding: 40px;
    width: 600px;
  }

  img {
    max-width: 400px;
  }

  h1 {
    margin-top: 50px;
    font-size: 36px;
    color: white;
  }

  span {
    color: #ff78f0;
  }

  .btn-cotainer {
    background-color: #2e2e41;
    padding: 12px 26px;
  }

  a {
    color: white;
    font-weight: 700;
    margin-top: 20px;
    font-size: 18px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }

  @media (min-width: 1080px) {
    .container {
      margin-top: 200px;
    }
    .info-container {
      width: 800px;
    }

    img {
      max-width: 600px;
    }
  }
`;

export default Wrapper;
