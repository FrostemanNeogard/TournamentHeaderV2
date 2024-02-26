import styled from "styled-components";

export const EditorHeading = styled.h1`
  text-align: center;
  font-size: 22pt;
`;

export const Editor = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ccc;
  border-radius: 5px;
  padding: 2rem;
  row-gap: 1rem;

  label {
    text-align: center;
    align-self: center;
    padding: 0.5rem;
  }

  input {
    border-radius: 5px;
    padding: 0.5rem;
  }
`;

export const PlayerHeading = styled.h1``;

export const PlayersForm = styled.form`
  display: grid;
  width: 100%;
`;

export const PlayerDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 3fr 3fr 3fr 2fr;
  column-gap: 1rem;
  grid-template-rows: repeat(2, 1fr);
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
`;

export const VerticalDivider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid black;
  margin: 1rem 0;
`;

export const UpdateButton = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background-color: #0f0;
  color: black;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #0d0;
  }
`;

export const ScoreButtons = styled.div`
  grid-row: 2;
  display: flex;
  column-gap: 0.5rem;
  width: 100%;

  button {
    padding: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const IncrementButton = styled.button`
  background-color: #0f0;
  &:hover {
    background-color: #0d0;
  }
`;

export const DecrementButton = styled.button`
  background-color: #f00;
  &:hover {
    background-color: #d00;
  }
`;
