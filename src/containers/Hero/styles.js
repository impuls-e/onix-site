import styled from "styled-components";

export const Container = styled.section`
  padding: 50vh 4vw 5vh;
  height: 100vh;
  @media (min-width: 1024px) {
    height: 80vh;
  }
  @media (min-width: 1350px) {
    height: 100vh;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;

  @media (min-width: 765px) {
  }
  @media (min-width: 1024px) {
  }
`;
