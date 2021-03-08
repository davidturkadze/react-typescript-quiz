import React from 'react';

type SelectedCategory = {
  category: string | undefined;
  difficulty: string | undefined;
};

const refreshPage = () => {
  window.location.reload();
};

const EmptyCategoryError: React.FC<SelectedCategory> = ({ category, difficulty }) => (
  <div className="errorContainer">
    <h2>
      Sorry, there are no questions for the category "<span style={{ color: 'blue' }}>{category}</span>" with the difficulty "
      <span style={{ color: 'blue' }}>{difficulty}</span>" yet
    </h2>
    <button className="back" onClick={refreshPage}>
      Go Back
    </button>
  </div>
);

export default EmptyCategoryError;
