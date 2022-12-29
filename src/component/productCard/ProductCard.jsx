import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ProductCard.styl";

const ProductCard = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const productData = async () => {
    const res = await axios.get("http://localhost:3000/");
    setProduct(res.data);
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <S.Container>
      <S.Section style={{ display: "flex" }}>
        {product.map((product, i) => {
          return (
            <S.Card
              key={product.id}
              onClick={() => {
                navigate(`/detailed/${i}`);
              }}
            >
              <S.CardImg src={product.img} />
              <S.CardTitle>{product.title}</S.CardTitle>
              <S.CardPrice>{product.price}원</S.CardPrice>
            </S.Card>
          );
        })}
      </S.Section>

      <S.MoreButton
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((data) => {
              const copy = [...product, ...data.data];
              setProduct(copy);
            })
            .catch(() => {
              console.log("실패함ㅅㄱ");
            });
        }}
      >
        더보기
      </S.MoreButton>
    </S.Container>
  );
};

export default ProductCard;
