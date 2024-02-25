import styled from "styled-components";

export const PlayerContainer = styled.section`
  width: 1920px !important;
  height: 1080px !important;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  color: red;
  background: none;
  justify-items: center;
  padding: 0.5rem 0;
  position: relative;
`;

export const CenterText = styled.h1`
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: white;
  font-weight: 600;
  font-size: 22pt;
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3px;
`;

export const Player = styled.article`
  background-color: rgba(0, 0, 0, 1);
  font-size: 33pt;
  display: grid;
  grid-template-columns: 1fr auto;
  color: white;
  align-items: center;
  padding: 0.5rem 2rem;
  position: absolute;
  width: 555px;
  right: 160px;
  top: 6px;
  h1 {
    color: white;
    display: flex;
    gap: 1rem;
    span {
      color: rgb(200, 200, 200);
    }
  }

  &:first-child {
    h2 {
      grid-column: 2;
      grid-row: 1;
    }
    left: 160px;
  }
`;
