import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

export const Container = styled.section`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 0 9px 0 rgba(44, 43, 57, 0.16);
  background-color: var(--transparency-zero);
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 10vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  height: 100%;

  a {
    text-decoration: none;
    font-size: 2.2rem;
    color: var(--white);
    font-weight: 900;
    text-shadow: #000 1px 1px 1px;
    transition: all 0.4s ease-in-out;

    &:hover {
      color: var(--primary);
    }
  }
  ul {
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    background: var(--black);
    align-items: flex-end;
    justify-content: center;
    padding: 0 4vw;
    height: 25vh;
    width: 100vw;
    transition: opacity 0.8s ease-out, visibility 0.2s ease-out,
      box-shadow 2s ease-in-out;
    z-index: -2;

    li {
      display: flex;
      align-items: center;
      height: 50px;
      border-radius: 0 5px 5px 0;
      margin-bottom: 2vh;

      a {
        padding: 0vh 2vw;
        font-size: 1.4rem;
        font-weight: 400;

        &:after {
          content: "";
          position: absolute;
          bottom: -0.2rem;
          left: 2vw;
          width: 55%;
          height: 2px;
          background-color: var(--white);
          transition: all 0.4s ease-in-out;
        }
      }
    }
    li:hover {
      a:after {
        background-color: var(--primary);
      }
    }
    li:nth-child(1) {
      a {
        transition: color 0.2s ease-in, visibility 0.4s ease-in-out,
          transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
      }
    }
    li:nth-child(2) {
      a {
        transition: color 0.2s ease-in, visibility 0.6s ease-in-out,
          transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
      }
    }
    li:nth-child(3) {
      a {
        transition: color 0.2s ease-in, visibility 0.8s ease-in-out,
          transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      }
    }
  }
  ul.click {
    visibility: visible;
    opacity: 1;
    li {
      a {
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
      }
    }
  }
  @media (min-width: 1024px) {
    a {
      margin-left: 2vw;
    }
    ul {
      opacity: 1;
      visibility: visible;
      position: initial;
      height: 100%;
      flex: 1;
      z-index: 0;
      align-items: center;
      justify-content: flex-end;
      background-color: transparent;

      li {
        padding: 0;
        margin-bottom: 0;
        a {
          transform: translateX(0);
          visibility: visible;
          opacity: 1;
          margin: 0;
          padding: 0 1vw;

          &:after {
            left: 1.1vw;
          }
        }
      }
      li:last-child {
        a {
          padding-right: 0;
        }
      }
    }
  }
`;

export const HamburguerMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 48px;
  height: 48px;
  margin-right: 4vw;

  &.click {
    div:nth-child(1) {
      transform: rotate(45deg) translate(9px, 8px);
      border: 2px solid var(--primary);
    }
    div:nth-child(2) {
      opacity: 0;
      visibility: hidden;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(10px, -10px);
      border: 2px solid var(--primary);
    }
  }

  &:hover {
    div {
      border: 2px solid var(--primary);
    }
  }

  div {
    width: 40px;
    border: 2px solid var(--primary);
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    transform: rotate(0);

    &:nth-child(2) {
      width: 30px;
      opacity: 1;
      visibility: visible;
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
  width: 48px;
  height: 48px;
  margin-left: 4vw;
  display: flex;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
export const MenuLink = styled(AnchorLink)`
  position: relative;
  outline: none;
  display: flex;
  text-decoration: none;
  transform: translateX(-10vw);
  visibility: hidden;
  opacity: 0;
`;
