import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 600px;
  background: #ccffff;
  border-radius: 10px;
  padding: 40px;
  margin-top: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  h3 {
    font-size: 1.2rem;
    text-align: left;
  }
  .iconRight {
    position:relative;
    top:1px;
  }
  .iconWrong {
    position:relative;
    top:3px;
  }
  p {
    font-size: 1.2rem;
    text-align: left;
  }
  .question {
    font-style: italic;
    font-weight: 700;
  }
  }
  @media (max-width: 768px) {
    width: 350px;
    p {
      font-size: 1rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  .start {
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
`;
