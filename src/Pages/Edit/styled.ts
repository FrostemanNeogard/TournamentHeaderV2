import styled from "styled-components";

export const EditorHeading = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;

  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;

export const Editor = styled.main`
  button {
    height: 100%;
    padding: 0 1rem !important;
  }
`;

export const PlayerHeading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const PlayersForm = styled.form`
  display: grid;
  align-items: center;
  width: 100%;
`;

export const PlayerDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 2fr;
  column-gap: 1rem;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ScoreInput = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const HorizontalDivider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid black;
  margin: 0.5rem 0;
`;

export const UpdateButton = styled.button`
  background-color: ${(props) => props.theme.colors.confirm} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.confirmDarkened} !important;
  }
`;

export const ScoreButtons = styled.div`
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: inherit;
  width: 100%;
`;

export const IncrementButton = styled.button`
  background-color: ${(props) => props.theme.colors.confirm} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.confirmDarkened} !important;
  }
`;

export const DecrementButton = styled.button`
  background-color: ${(props) => props.theme.colors.cancel} !important;
  &:hover {
    background-color: ${(props) =>
      props.theme.colors.cancelDarkened} !important;
  }
`;

export const LabelledInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    align-self: flex-start;
  }

  input,
  select {
    height: 2rem;
  }
`;

export const MiscallaneousDetails = styled.div`
  display: grid;
  gap: 1rem;
  align-items: flex-end;
  grid-template-columns: 3fr 1fr 1fr 1.5fr;

  button {
    white-space: nowrap;
    height: 2rem;
    width: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    div:first-child {
      grid-column: 1 / -1;
    }
    grid-template-columns: auto auto 3fr;
  }
`;

export const Error = styled.div`
  font-size: 2rem;
  color: white;
  height: max-content;

  a {
    color: inherit !important;
  }

  button {
    font-size: 2rem;
    margin-top: 10px;
    padding: 1rem !important;
  }
`;
