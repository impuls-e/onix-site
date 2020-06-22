import styled from "styled-components";

export const Container = styled.section`
  padding: 6vh 4vw;
  background-image: radial-gradient(
    circle,
    #d7d7d7,
    #d7d7d7 1px,
    var(--white) 0,
    var(--white)
  );
  background-size: 28px 28px;
  color: var(--black);
`;

export const ServiceContent = styled.div`
  height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    margin-bottom: 4vh;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;

    .gatsby-image-wrapper {
      width: 100%;
      margin-bottom: 2vh;
    }
    h4 {
      margin-bottom: 1vh;
    }
    p {
      margin-bottom: 4vh;
    }
  }

  @media (min-width: 765px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    div {
      width: 46%;
    }
  }
  @media (min-width: 1024px) {
    div {
      width: 32%;
    }
  }
`;
