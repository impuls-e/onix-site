import styled from "styled-components";

export const Container = styled.section`
  padding: 6vh 4vw 6vh;
  background-color: var(--white);
  color: var(--black);
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;
  p {
    span {
      color: var(--black);
    }

    a {
      color: var(--primary);
      transition: 0.2s all ease-in-out;

      &:hover {
        color: var(--black);
      }
    }
  }
`;
