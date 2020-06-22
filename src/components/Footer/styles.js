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
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1350px;
  margin: 0 auto;
  p {
    span {
      color: #747474;
    }

    a {
      color: #747474;
      transition: 0.2s all ease-in-out;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;
