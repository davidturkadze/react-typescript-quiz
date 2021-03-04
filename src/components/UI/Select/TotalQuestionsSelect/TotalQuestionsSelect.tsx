import React from 'react';
// Components
import { Select, SelectContainer } from '../../Select.styles';

type DifficultySelectProps = {
  value: number;
  quizTotalQuestions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DifficultySelectBox: React.FC<DifficultySelectProps> = ({ value, quizTotalQuestions }) => {
  return (
    <SelectContainer>
      <label className="selectLabel" htmlFor="quizTotalQuestions">
        Select total questions:
      </label>
      <Select id="quizTotalQuestions" onChange={(e) => quizTotalQuestions(e)} value={value}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </Select>
    </SelectContainer>
  );
};

export default DifficultySelectBox;
