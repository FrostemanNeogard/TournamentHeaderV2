import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};

  nav {
    padding: 1.5rem 10vmax;
    display: flex;
    column-gap: 4rem;
  }

  button {
    font-size: 2rem;
    padding: 0;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.text.primary};

    &:hover {
      cursor: pointer;
      background: none;
      color: ${(props) => props.theme.colors.text.primaryDarkened};
    }
  }
`;
