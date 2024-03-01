import { useNavigate } from "react-router-dom";
import * as S from "./styled";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <nav>
        <button onClick={() => navigate("")}>HOME</button>
      </nav>
    </S.Header>
  );
};
