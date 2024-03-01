import { Outlet } from "react-router-dom";
import * as S from "./styled";
import { Header } from "src/components/Header";

export const Layout = () => {
  return (
    <S.AppBackground>
      <Header />
      <S.MainBackground>
        <Outlet />
      </S.MainBackground>
    </S.AppBackground>
  );
};
