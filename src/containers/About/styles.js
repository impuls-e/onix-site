import styled from "styled-components";

export const Container = styled.section`
  color: var(--white);
  background-color: var(--black);
`;

export const AboutContent = styled.div`
  padding: 12vh 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--breakpoint-xl);
  margin: 0 auto;

  span {
    width: 50%;
    height: 1px;
    box-shadow: 0 5px 5px -5px #99999991;
    padding-bottom: 2vh;
    margin-bottom: 6vh;
  }

  h2 {
    width: 100%;
    text-align: center;
    max-width: 580px;
  }

  aside {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 4vh;

      h1 {
        text-align: center;
      }
      span {
        margin-bottom: 2vh;
      }
      p {
        text-align: center;
        color: var(--white);
        margin-bottom: 2vh;
      }
    }
    ul {
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        flex-direction: row;
        align-items: center;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10vh;
          height: 10vh;
          margin-right: 2vw;
          margin-bottom: 0;
          border-radius: 50%;
          background: var(--gray);
        }
        h3 {
          flex: 1;
        }
      }
      li + li {
        margin-top: 2vh;
      }
    }
  }
  @media (min-width: 765px) {
    h2 {
      width: 85%;
      max-width: 700px;
    }
    span {
      width: 30%;
      margin-bottom: 8vh;
    }
    aside {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      div {
        width: 48%;
        margin-top: 4vh;
        margin-bottom: 0;
      }
      ul {
        width: 48%;

        li {
          div {
            margin-right: 2vw;
            margin-top: 0vh;
          }
        }
      }
    }
  }
`;
