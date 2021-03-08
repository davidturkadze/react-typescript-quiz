import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/bg-img.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    
    margin: 0;
    display: flex;
    justify-content: center;
  }
  body:before {
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background:url(${BGImage}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .quizData {
    color: #ccffff;
    font-size: 1.2rem;
    margin-top: -20px;
  }
  .score {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: -4px;
    margin-top: -4px;
  }
  h1,
  h2 {
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 90px;
    text-align: center;
    margin: 20px;
    color: #fff;
    @media (max-width: 768px) {
      font-size: 65px;
    }
  }
  .errorContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    background: #ccffff;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    @media (max-width: 768px) {
      width: 350px;
    }
    > h2 {
      font-size: 30px;
      font-weight: 400;
      color: #000;
    }
    > a {
      font-size: 20px;
      color: blue;
    }
  }
  .start,
  .next,
  .back {
    cursor: pointer;
    background: linear-gradient(45deg, rgba(59, 173, 227, 1) 0%, rgba(87, 111, 230, 1) 25%, rgba(152, 68, 183, 1) 51%, rgba(255, 53, 127, 1) 100%);
    border: 1px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 20px;
  }
  .start {
    max-width: 250px;
  }
  .back {
    max-width: 200px;
  }
  .result {
    cursor: pointer;
    background: linear-gradient(to right, #283048 0%, #859398 51%, #283048 100%);
    border: 1px solid black;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 7px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 20px;
  }
  .selectContainer {
    display: flex;
    flex-direction: column;
  }
`;
