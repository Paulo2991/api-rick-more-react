import styled, { createGlobalStyle } from "styled-components";
import cards from "../../assets/fundo.jpg";

export const GlobalStyled = createGlobalStyle`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }                        
`;

export const Main = styled.main`
  max-width: 1589px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  background-color: #023b0f;

  h1 {
    font-size: 40px;
    color: #049297;
  }
`;

export const Input = styled.div`
  label {
    display: block;
    font-size: 35px;
  }

  input {
    width: 350px;
    height: 40px;
    border-radius: 6px;
    background-color: white;
    color: black;
  }

  @media screen and (max-width: 320px) {
    input {
      width: 290px;
    }
  }
`;


export const CardPersonagem = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
  }
`;

export const CardsPersonagens = styled.section`
  padding: 25px;
  height: 30%;
  background-image: url(${cards});
  background-repeat: no-repeat;
  width: 30%;
  margin-top: 2%;

  img {
    width: 25vw;
    height: 25vh;
  }

  h2 {
    text-align: center;
    color: white;
  }

  @media screen and (max-width: 500px) {
    width: 50%;

    img {
      width: 30vw;
      height: 30vh;
    }
  }
`;
