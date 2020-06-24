import styled from "styled-components";

export const Container = styled.section`
  padding: 12vh 4vw;
  background-color: var(--white);
  color: var(--black);
`;

export const PortfolioContent = styled.div`
  height: 100%;
  max-width: var(--breakpoint-xl);
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
