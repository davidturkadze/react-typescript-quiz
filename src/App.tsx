import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { fetchQuizData } from './API';
// Types
// import { QuestionsState, Difficulty } from './API';
import { QuestionsState } from './API';
// Containers
import Quiz from './containers/Quiz';
// Components
import UserAnswers from './components/UserAnswers/UserAnswers';
// Styles
import { GlobalStyle } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS: number = 10;

const App = () => {
  let history = useHistory();

  const [difficulty, setDifficulty] = useState<string>('easy');
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [gameScore, setGameScore] = useState(0);
  const [questionNr, setQuestionNr] = useState(0);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const quizDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);
  };

  const startTriviaQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const quizQuestions = await fetchQuizData(TOTAL_QUESTIONS, difficulty);
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
  const showResults = () => {
    history.push('/answers');
  };

  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route
          path="/"
          exact
          component={() => (
            <Quiz
              TOTAL_QUESTIONS={TOTAL_QUESTIONS}
              loading={loading}
              difficulty={difficulty}
              gameOver={gameOver}
              gameScore={gameScore}
              questionNr={questionNr}
              questions={questions}
              userAnswers={userAnswers}
              nextQuestion={nextQuestion}
              startTriviaQuiz={startTriviaQuiz}
              checkAnswer={checkAnswer}
              showResults={showResults}
              quizDifficulty={quizDifficulty}
            />
          )}
        />
        {userAnswers.length === TOTAL_QUESTIONS && (
          <Route
            path="/answers"
            component={() => <UserAnswers uAnswers={userAnswers} startTriviaQuiz={startTriviaQuiz} gameScore={gameScore} TOTAL_QUESTIONS={TOTAL_QUESTIONS} />}
          />
        )}
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
