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
  TOTAL_QUESTIONS: number;
  startTriviaQuiz: () => void;
};

const UserAnswers: React.FC<UserAnswersProps> = ({ uAnswers, gameScore, TOTAL_QUESTIONS, startTriviaQuiz }) => {
  let history = useHistory();

  const startNrwGame = () => {
    startTriviaQuiz();
    history.push('/');
  };

  return (
    <Wrapper>
      <h2>
        Score: {gameScore} of total {TOTAL_QUESTIONS} Points
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
                Your answer: <span style={{ color: userAnswer.correct ? 'green' : 'red' }}>{userAnswer.answer}</span>
              </p>
              <p>
                Correct answer: <span dangerouslySetInnerHTML={{ __html: userAnswer.correctAnswer }} />
              </p>
            </div>
          </div>
        ))}
      {/* <div>
        <p>Question {1}</p>
        <p>What geometric shape is generally used for stop signs?</p>
        <p>
          Your answer: <span>Hexagon</span>
        </p>
        <p>
          Correct answer: <span>Octagon</span>
        </p>
      </div>
      <div>
        <p>Question {2}</p>
        <p>Which of these is NOT a main playable character in &quot;Grand Theft Auto V&quot;?</p>
        <p>
          Your answer: <span>Michael</span>
        </p>
        <p>
          Correct answer: <span>Lamar</span>
        </p>
      </div> */}
      <button className="start" onClick={startNrwGame}>
        Start new game
      </button>
    </Wrapper>
  );
};

export default UserAnswers;
