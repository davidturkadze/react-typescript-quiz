import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
// Types
import { AnswerObject } from '../../App';
// Styles
import { Wrapper } from './UserAnswers.styles';

type UserAnswersProps = {
  uAnswers: AnswerObject[] | undefined;
  gameScore: number;
  totalQuestions: number;
  startTriviaQuiz: () => void;
};

const UserAnswers: React.FC<UserAnswersProps> = ({ uAnswers, gameScore, totalQuestions, startTriviaQuiz }) => {
  let history = useHistory();

  const startNewGame = () => {
    //startTriviaQuiz();
    history.push('/');
  };

  return (
    <Wrapper>
      <h2>
        Score: {gameScore} of total {totalQuestions} Points
      </h2>
      {uAnswers &&
        uAnswers.map((userAnswer: AnswerObject, index) => (
          <div key={userAnswer.question}>
            <div>
              <p className="questionNumber">
                Question {index + 1}{' '}
                {userAnswer.correct ? (
                  <span className="iconRight">
                    <FcCheckmark size={22} />
                  </span>
                ) : (
                  <span className="iconWrong">
                    <AiOutlineClose size={22} style={{ color: 'red' }} />
                  </span>
                )}
              </p>
              <p className="question" dangerouslySetInnerHTML={{ __html: userAnswer.question }} />
              <p>
                Your answer: <span style={{ color: userAnswer.correct ? 'green' : 'red' }} dangerouslySetInnerHTML={{ __html: userAnswer.answer }} />
              </p>
              <p>
                Correct answer: <span dangerouslySetInnerHTML={{ __html: userAnswer.correctAnswer }} />
              </p>
            </div>
          </div>
        ))}
      <button className="start" onClick={startNewGame}>
        Go back
      </button>
    </Wrapper>
  );
};

export default UserAnswers;
