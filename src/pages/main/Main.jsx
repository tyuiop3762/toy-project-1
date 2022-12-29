import React from "react";
import * as S from "./Main.style";

import ProductCard from "../../component/productCard/ProductCard";
const Main = () => {
  return (
    <S.Container>
      <S.MainBg src="img/bg.png"></S.MainBg>
      <ProductCard />
    </S.Container>
  );
};

export default Main;
