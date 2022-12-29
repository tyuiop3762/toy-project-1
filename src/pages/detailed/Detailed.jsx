import React, { useEffect, useState } from "react";
import * as S from "./Detailed.style";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detailed = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [alert, setAlert] = useState(true);
  //   const findProduct = product.find((x) => x.id === id);

  const productData = async () => {
    const res = await axios.get("http://localhost:3000/");
    setProduct(res.data);
  };

  useEffect(() => {
    productData();
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 10000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <S.Container>
      <S.Wrap>
        {alert === true ? (
          <S.Eventdiv>10초안에 구매시 수파두파 할인</S.Eventdiv>
        ) : null}
        <S.Img src={product[id]?.img} />
        <S.Title>{product[id]?.title}</S.Title>
        <S.Price>{product[id]?.price}</S.Price>
        <S.Content>{product[id]?.content}</S.Content>
        <div style={{ display: "flex", marginTop: "3vh" }}>
          <S.OrderButton>주문하기</S.OrderButton>
        </div>
      </S.Wrap>
    </S.Container>
  );
};

export default Detailed;
