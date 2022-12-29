import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 30vw;
  height: 40vh;
  background-color: black;
`;

const Title = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Price = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrderButton = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  margin: 0 auto;
`;

const Eventdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  background-color: beige;
  font-weight: bold;
`;
export { Container, Img, Title, Price, Content, Wrap, OrderButton, Eventdiv };
