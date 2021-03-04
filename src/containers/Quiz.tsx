import React from 'react';
// Types
import ClipLoader from 'react-spinners/ClipLoader';
import { QuestionsState, categoryState } from '../API';
import { AnswerObject } from '../App';
// Styles
import { css } from '@emotion/react';
import { Wrapper } from '../App.styles';
// Components
import QuestionCard from '../components/QuestionCard/QuestionCard';
import DifficultySelectBox from '../components/UI/Select/DifficultySelect/DifficultySelect';
import TotalQuestionsSelectBox from '../components/UI/Select/TotalQuestionsSelect/TotalQuestionsSelect';
import CategorySelectBox from '../components/UI/Select/CategorySelect/CategorySelect';

const override = css`
  display: block;
  margin: 0 auto;
`;

type QuizProps = {
  loading: boolean;
  difficulty: string;
  totalQuestions: number;
  gameOver: boolean;
  gameScore: number;
  questionNr: number;
  questions: QuestionsState[];
  userAnswers: AnswerObject[];
  category: categoryState[];
  selectedCategory: number;
  nextQuestion: () => void;
  startTriviaQuiz: () => void;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showResults: () => void;
  quizDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  quizTotalQuestions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  quizCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Quiz: React.FC<QuizProps> = ({
  loading,
  difficulty,
  totalQuestions,
  gameOver,
  gameScore,
  questionNr,
  questions,
  userAnswers,
  category,
  selectedCategory,
  nextQuestion,
  startTriviaQuiz,
  checkAnswer,
  showResults,
  quizDifficulty,
  quizTotalQuestions,
  quizCategory,
}) => {
  return (
    <Wrapper>
      <h1>TRIVIA QUIZ</h1>
      {userAnswers.length === totalQuestions || gameOver ? (
        <div className="selectContainer">
          <DifficultySelectBox quizDifficulty={quizDifficulty} value={difficulty} />{' '}
          <CategorySelectBox value={selectedCategory} categories={category} quizCategory={quizCategory} />{' '}
          <TotalQuestionsSelectBox quizTotalQuestions={quizTotalQuestions} value={totalQuestions} />
        </div>
      ) : null}

      {gameOver || userAnswers.length === totalQuestions ? (
        <button className="start" onClick={startTriviaQuiz}>
          {userAnswers.length === totalQuestions ? 'Start new game' : 'Start'}
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
          totalQuestions={totalQuestions}
          question={questions[questionNr].question}
          answers={questions[questionNr].answers}
          userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
          callback={checkAnswer}
        />
      )}

      <ClipLoader color={'#4A90E2'} loading={loading} size={200} css={override} />
      {!gameOver && !loading && userAnswers.length === questionNr + 1 && questionNr !== totalQuestions - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
      {!loading && userAnswers.length === totalQuestions ? (
        <button className="result" onClick={showResults}>
          Show Results
        </button>
      ) : null}
    </Wrapper>
  );
};

export default Quiz;
