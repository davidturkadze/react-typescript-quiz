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
import SelectBox from '../components/UI/Input/Select/SelectBox';
import EmptyCategoryError from '../components/Error/EmptyCategoryError';

const override = css`
  display: block;
  margin: 0 auto;
`;

type QuizProps = {
  error: boolean;
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
  selectedCategoryName: string | undefined;
  nextQuestion: () => void;
  startTriviaQuiz: () => void;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
  showResults: () => void;
  quizDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  quizTotalQuestions: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  quizCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Quiz: React.FC<QuizProps> = ({
  error,
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
  selectedCategoryName,
  nextQuestion,
  startTriviaQuiz,
  checkAnswer,
  showResults,
  quizDifficulty,
  quizTotalQuestions,
  quizCategory,
}) => {
  const QUIZ_DIFFICULTY = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];
  const TOTAL_QUESTIONS = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
  ];

  return (
    <Wrapper>
      <h1>TRIVIA QUIZ</h1>
      {userAnswers.length === totalQuestions || gameOver ? (
        <div className="selectContainer">
          <SelectBox selectType="difficulty" options={QUIZ_DIFFICULTY} value={difficulty} onSelectChangeHandler={quizDifficulty} />
          <SelectBox selectType="category" options={category} value={selectedCategory} onSelectChangeHandler={quizCategory} />
          <SelectBox selectType="totalQuestions" options={TOTAL_QUESTIONS} value={totalQuestions} onSelectChangeHandler={quizTotalQuestions} />

          <button className="start" onClick={startTriviaQuiz}>
            {userAnswers.length === totalQuestions ? 'Start new game' : 'Start'}
          </button>
        </div>
      ) : null}

      {!gameOver && (
        <div className="quizData">
          <p className="score">
            Score: <span style={{ color: '#00ff00' }}>{gameScore}</span>
          </p>
        </div>
      )}

      {/* Show error component if there are no questions to the selected category */}
      {error && <EmptyCategoryError category={selectedCategoryName} difficulty={difficulty} />}

      {!error && !loading && !gameOver && (
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
