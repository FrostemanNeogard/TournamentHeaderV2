import styled from "styled-components";

export const AppBackground = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: grid;
  color: ${(props) => props.theme.colors.text.primary};
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;

  a {
    color: ${(props) => props.theme.colors.link};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.linkDarkened};
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.text.secondary};
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.tertiaryDarkened};
    }
  }
`;

export const MainBackground = styled.div`
  align-self: center;
  height: auto;
  padding: 3rem;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
  }

  main {
    display: grid;
    align-self: center;
    height: max-content;
    background-color: ${(props) => props.theme.colors.primary};
    filter: drop-shadow(1px 5px 10px black);
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
    row-gap: 1rem;

    label {
      text-align: left;
      padding: 0.3rem 0;
      width: 100%;
      align-self: center;
    }

    input {
      border-radius: 5px;
      padding: 0.5rem;
      width: 100%;
      &[type="number"] {
        width: 5rem;
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
`;
