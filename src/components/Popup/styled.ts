import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background: none;
  pointer-events: none;
  z-index: 10000;
`;

export const Popup = styled.div<{ $animationDuration?: number }>`
  position: absolute;
  bottom: 3rem;
  right: 0;
  margin: 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.textSecondary};
  border-radius: 5px;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  animation-name: fadeout;
  animation-duration: ${(props) => props.$animationDuration}ms;

  @keyframes fadeout {
    0% {
      opacity: 100%;
    }
    70% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }
`;
