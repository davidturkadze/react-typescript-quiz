import React from 'react';

type SelectedCategory = {
  category: string | undefined;
};

const refreshPage = () => {
  window.location.reload();
};

const EmptyCategoryError: React.FC<SelectedCategory> = ({ category }) => (
  <div className="errorContainer">
    <h2>
      We are sorry, there are no questions to the category "<span style={{ color: 'blue' }}>{category}</span>" yet
    </h2>
    <button className="back" onClick={refreshPage}>
      Go Back
    </button>
  </div>
);

export default EmptyCategoryError;
