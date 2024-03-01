import { Outlet } from "react-router-dom";
import * as S from "./styled";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

export const Layout = () => {
  return (
    <S.AppBackground>
      <Header />
      <S.MainBackground>
        <Outlet />
      </S.MainBackground>
      <Footer />
    </S.AppBackground>
  );
};
