import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  .selectLabel {
    margin: 10px 0;
  }
`;

export const Select = styled.select`
  width: 250px;
  height: 35px;
  background: white;
  color: #000;
  padding-left: 5px;
  border: none;
  border-radius: 7px;
  font-size: 1.2rem;

  option {
    color: #000;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
