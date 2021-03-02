import React from 'react';
// Types
// Components
import { Select } from './Select.styles';

const difficulty: string[] = ['easy', 'medium', 'hard'];

const SelectBox = () => {
  return (
    <Select>
      {difficulty.map((diff: any, index) => (
        <option key={index} value={diff}>
          {diff.toUpperCase()}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
