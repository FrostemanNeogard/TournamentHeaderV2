import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};

  nav {
    padding: 2rem 10vmax;
    display: flex;
    column-gap: 1rem;
  }

  button {
    background-color: ${(props) => props.theme.colors.tertiary};

    &:hover {
      cursor: pointer;
    }
  }
`;
