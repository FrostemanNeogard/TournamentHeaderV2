import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};

  nav {
    padding: 2rem 15vmax;
  }

  button {
    background-color: ${(props) => props.theme.colors.tertiary};

    &:hover {
      cursor: pointer;
    }
  }
`;
