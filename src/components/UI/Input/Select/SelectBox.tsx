import React from 'react';
// Styles
import { Select, SelectContainer } from './Select.styles';
// Types
import { categoryState } from '../../../../API';

type SelectBoxProps = {
  selectType: string;
  options: any;
  value: string | number;
  onSelectChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type Option = {
  value: string | number;
  label: string;
};

const SelectBox: React.FC<SelectBoxProps> = ({ selectType, options, value, onSelectChangeHandler }) => {
  let selectOptions;
  let label: string = '';
  switch (selectType) {
    case 'difficulty':
      selectOptions = options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ));
      label = 'Select difficulty:';
      break;
    case 'totalQuestions':
      selectOptions = options.map((option: Option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ));
      label = 'Select total questions:';
      break;
    case 'category':
      selectOptions = options.map((option: categoryState) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ));
      label = 'Select category:';
      break;
  }

  return (
    <SelectContainer>
      <label className="selectLabel" htmlFor={selectType}>
        {label}
      </label>
      <Select id={selectType} value={value} onChange={onSelectChangeHandler}>
        {selectOptions}
      </Select>
    </SelectContainer>
  );
};

export default SelectBox;
