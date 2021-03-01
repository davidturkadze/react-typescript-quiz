import styled, { createGlobalStyle } from 'styled-components';

import BGImage from './images/bg-img.jpg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    display: flex;
    justify-content: center;
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
  .score {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 3px;
  }
  h1 {
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
  .start,
  .next {
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
`;
