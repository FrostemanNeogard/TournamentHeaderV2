import { useState } from "react";
import * as S from "./styled";

export const Popup = (props: {
  text: string;
  lifespan?: number;
  callback?: Function;
}) => {
  const { text, lifespan = 5000, callback } = props;

  const [isAlive, setIsAlive] = useState<boolean>(true);

  setTimeout(() => {
    setIsAlive(false);
    if (callback !== undefined) {
      callback();
    }
  }, lifespan);

  if (!isAlive) {
    return;
  }

  return (
    <S.Overlay>
      <S.Popup $animationDuration={lifespan}>
        <h1>{text}</h1>
      </S.Popup>
    </S.Overlay>
  );
};
