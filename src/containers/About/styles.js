import styled from "styled-components";

export const Container = styled.section`
  padding: 6vh 4vw;
  color: var(--white);
  background-color: var(--black);
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;

  div {
    h3 {
      width: 100%;
      margin-bottom: 4vh;
      text-align: center;
    }

    p {
      margin-bottom: 4vh;
    }
  }
  aside {
    display: flex;

    .gatsby-image-wrapper {
      width: 70vw;
      opacity: 0.8;
      max-width: 400px;
    }
  }
  @media (min-width: 765px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      width: 48%;
    }
    aside {
      width: 50%;
      justify-content: flex-end;
    }
  }
`;
