import React from 'react';
// Types
import ClipLoader from 'react-spinners/ClipLoader';
import { QuestionsState } from '../API';
import { AnswerObject } from '../App';
// Styles
import { css } from '@emotion/react';
import { Wrapper } from '../App.styles';
// Components
import QuestionCard from '../components/QuestionCard/QuestionCard';
import SelectBox from '../components/UI/Select';

const override = css`
  display: block;
  margin: 0 auto;
`;

type QuizProps = {
  TOTAL_QUESTIONS: number;
  loading: boolean;
  gameOver: boolean;
  gameScore: number;
  questionNr: number;
  questions: QuestionsState[];
  userAnswers: AnswerObject[];
  nextQuestion: () => void;
  startTriviaQuiz: () => void;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showResults: () => void;
};

const Quiz: React.FC<QuizProps> = ({
  TOTAL_QUESTIONS,
  loading,
  gameOver,
  gameScore,
  questionNr,
  questions,
  userAnswers,
  nextQuestion,
  startTriviaQuiz,
  checkAnswer,
  showResults,
}) => (
  <Wrapper>
    <h1>TRIVIA QUIZ</h1>
    <SelectBox />
    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startTriviaQuiz}>
        {userAnswers.length === TOTAL_QUESTIONS ? 'Start new game' : 'Start'}
      </button>
    ) : null}

    {!gameOver && (
      <p className="score">
        Score: <span style={{ color: '#00ff00' }}>{gameScore}</span>
      </p>
    )}
    {!loading && !gameOver && (
      <QuestionCard
        questionNumber={questionNr + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNr].question}
        answers={questions[questionNr].answers}
        userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
        callback={checkAnswer}
      />
    )}

    <ClipLoader color={'#4A90E2'} loading={loading} size={200} css={override} />
    {!gameOver && !loading && userAnswers.length === questionNr + 1 && questionNr !== TOTAL_QUESTIONS - 1 ? (
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    ) : null}
    {!loading && userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="result" onClick={showResults}>
        Show Results
      </button>
    ) : null}
  </Wrapper>
);

export default Quiz;
