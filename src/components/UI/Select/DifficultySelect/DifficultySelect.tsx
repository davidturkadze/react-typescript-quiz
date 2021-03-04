import React from 'react';
// Components
import { Select, SelectContainer } from '../../Select.styles';

type DifficultySelectProps = {
  value: string;
  quizDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DifficultySelectBox: React.FC<DifficultySelectProps> = ({ value, quizDifficulty }) => {
  return (
    <SelectContainer>
      <label className="selectLabel" htmlFor="difficulty">
        Select difficulty:
      </label>
      <Select id="difficulty" onChange={(e) => quizDifficulty(e)} value={value}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </Select>
    </SelectContainer>
  );
};

export default DifficultySelectBox;
