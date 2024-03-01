import * as S from "./styled";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <S.Footer>
      <h1>
        Tournament Header app created by{" "}
        <a href="https://twitter.com/funnyorangcat" target="_blank">
          @funnyorangcat
        </a>
        . Unsure what to do? Check out the <Link to="help">help</Link> page!
      </h1>
    </S.Footer>
  );
};
