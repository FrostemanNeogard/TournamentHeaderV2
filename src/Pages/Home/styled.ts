import styled from "styled-components";

export const Main = styled.main`
  h1,
  label {
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    font-size: 1.5rem;
  }
`;

export const ErrorText = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.cancel};
`;
