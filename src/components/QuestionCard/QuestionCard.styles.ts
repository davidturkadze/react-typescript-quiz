import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  background: #ccffff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    width: 350px;
    padding: 15px 40px;
    p {
      font-size: 1rem;
    }
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    padding: 20px 0;
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(to right, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(to right, #FF5656, #C16868)'
        : 'linear-gradient(to right, #16222A 0%, #3A6073  51%, #16222A  100%)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
      padding: 10px 0;
      font-size: 0.9rem;
    }
  }
`;
