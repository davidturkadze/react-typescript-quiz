import React from 'react';
// Components
import { Select } from './Select.styles';

type SelectBoxProps = {
  value: string;
  quizDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox: React.FC<SelectBoxProps> = ({ value, quizDifficulty }) => {
  return (
    <Select onChange={(e) => quizDifficulty(e)} value={value}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </Select>
  );
};

export default SelectBox;
