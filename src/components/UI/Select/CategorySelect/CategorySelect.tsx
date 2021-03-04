import React from 'react';
//Types
import { categoryState } from '../../../../API';
// Components
import { Select, SelectContainer } from '../../Select.styles';

type CategorySelectProps = {
  value: number;
  categories: categoryState[];
  quizCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const CategorySelectBox: React.FC<CategorySelectProps> = ({ value, categories, quizCategory }) => {
  return (
    <SelectContainer>
      <label className="selectLabel" htmlFor="category">
        Select category:
      </label>
      <Select id="category" onChange={(e) => quizCategory(e)} value={value}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default CategorySelectBox;
