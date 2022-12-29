import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
`;

const Card = styled.div`
  width: 15rem;
  height: 15rem;
  margin: 2.5rem;
  grid-template-columns: 200px 200px 500px;
`;
const CardTitle = styled.span`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
`;

const CardPrice = styled.span`
  font-size: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  background-color: #a0a0a0;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  display: grid;

  &::before {
    content: "section";
    color: #606060;
    height: 500px;
  }
`;

const MoreButton = styled.button`
  font-size: 1.5rem;
  width: 10rem;
  height: 3rem;
  display: block;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid white;
    transition: all 0.2s;
    color: white;
  }
`;

export { Container, Card, CardTitle, CardImg, CardPrice, Section, MoreButton };
