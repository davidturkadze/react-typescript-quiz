import React, { useState } from 'react';
import { fetchQuizData } from './API';
import { css } from '@emotion/react';
// Types
import { QuestionsState, Difficulty } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import ClipLoader from 'react-spinners/ClipLoader';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const override = css`
  display: block;
  margin: 0 auto;
`;

const TOTAL_QUESTIONS: number = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [gameScore, setGameScore] = useState(0);
  const [questionNr, setQuestionNr] = useState(0);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const startTriviaQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const quizQuestions = await fetchQuizData(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(quizQuestions);
    setGameScore(0);
    setUserAnswers([]);
    setQuestionNr(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Check answer against correct answer
      const answer = e.currentTarget.value;
      const correct = questions[questionNr].correct_answer === answer;
      // Add score if answer is correct
      if (correct) {
        setGameScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[questionNr].question,
        answer,
        correct,
        correctAnswer: questions[questionNr].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    setLoading(true);
    // Move on to the next question if not the last question
    const nextQuestion = questionNr + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
      setLoading(false);
    } else {
      setQuestionNr(nextQuestion);
      setLoading(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>TRIVIA QUIZ</h1>
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
      </Wrapper>
    </>
  );
};

export default App;
