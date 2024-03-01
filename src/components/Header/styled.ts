import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textPrimary};

  nav {
    padding: 2rem 15vmax;
  }

  button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    color: inherit;
    background: #333;

    &:hover {
      cursor: pointer;
    }
  }
`;
