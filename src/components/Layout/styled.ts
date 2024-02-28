import styled from "styled-components";

export const AppBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: grid;
  padding: 3rem;
  justify-content: center;
  background-color: #1f1f1f;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
  }

  main {
    display: grid;
    align-self: center;
    width: 90vw;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
    }

    height: max-content;
    background-color: #555;
    color: #f2f2f2;
    filter: drop-shadow(1px 5px 10px black);
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
    row-gap: 1rem;

    button {
      border: 1px solid black;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
