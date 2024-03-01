import styled from "styled-components";

export const AppBackground = styled.div`
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
    max-width: 50vmax;
    height: max-content;
    background-color: #555;
    color: #f2f2f2;
    filter: drop-shadow(1px 5px 10px black);
    border: 1px solid black;
    border-radius: 5px;
    padding: 2rem;
    row-gap: 1rem;

    button {
      background-color: #ddd;
      border: 1px solid black;
      border-radius: 5px;
      padding: 1rem;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        background-color: #bbb;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }

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
