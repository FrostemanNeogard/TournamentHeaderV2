import { Outlet } from "react-router-dom";
import * as S from "./styled";

export const Layout = () => {
  return (
    <>
      <S.AppBackground>
        <Outlet />
      </S.AppBackground>
    </>
  );
};
