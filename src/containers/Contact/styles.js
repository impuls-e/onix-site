import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--white);
  color: var(--black);
`;

export const ContactContent = styled.div`
  display: flex;
  padding: 12vh 4vw 0;
  flex-direction: column;
  align-items: center;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;

  h3 {
    margin-bottom: 4vh;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    h4 {
      margin-bottom: 2vh;
    }

    a {
      display: flex;
      align-items: center;
      color: var(--black);
      margin-bottom: 2vh;
      transition: 0.2s all ease-in-out;
      text-transform: uppercase;

      &:hover {
        color: var(--primary);
      }
      svg {
        margin-top: 0.3vh;
        margin-right: 1vw;
        font-size: 1.5rem;
      }
    }
    a:last-child {
      font-size: 0.7rem;
    }
    p {
      text-transform: uppercase;
      margin-bottom: 2vh;
    }
  }

  aside {
    display: flex;

    .gatsby-image-wrapper {
      width: 70vw;
      opacity: 0.8;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      width: 100%;
      text-align: center;
    }

    div {
      width: 31%;
    }
  }
`;

export const Map = styled.div`
  padding: 2vh 4vw;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;
  iframe {
  }
`;
