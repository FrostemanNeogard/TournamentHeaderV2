import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <nav>
        <button onClick={() => navigate("")}>Home</button>
        <button onClick={() => navigate("help")}>How to use</button>
      </nav>
    </S.Header>
  );
};
