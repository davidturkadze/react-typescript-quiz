import React from 'react';

import { AnswerObject } from '../../App';

type UserAnswersProps = {
  uAnswers: AnswerObject[] | undefined;
};

const UserAnswers: React.FC<UserAnswersProps> = ({ uAnswers }) => (
  <div style={{ color: 'white' }}>
    {/* {uAnswers &&
      uAnswers.map((userAnswer: AnswerObject) => (
        <div key={userAnswer.question} style={{ color: 'white' }}>
          <p>{userAnswer.question}</p>
          <p>{userAnswer.answer}</p>
          <p>{userAnswer.correct}</p>
          <p>{userAnswer.correctAnswer}</p>
        </div>
      ))} */}
    <div>
      <p>What geometric shape is generally used for stop signs?</p>
      <p>Hexagon</p>
      <p>Octagon</p>
    </div>
    <div>
      <p>Which of these is NOT a main playable character in &quot;Grand Theft Auto V&quot;?</p>
      <p>Michael</p>
      <p>Lamar</p>
    </div>
  </div>
);

export default UserAnswers;
